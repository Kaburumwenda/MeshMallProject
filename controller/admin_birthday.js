var express = require('express');
var router = express.Router();
var mkdirp = require('mkdirp');
var fs = require('fs-extra');
var resizeImg = require('resize-img');
var auth = require('../config/auth');
var isAdmin = auth.isAdmin;

// Get Product model
var Product = require('../models/birthday');

// Get Category model
var Category = require('../models/category');

/*
 * GET products index
 */
router.get('/', isAdmin,  function (req, res) {
    var count;

    Product.count(function (err, c) {
        count = c;
    });

    Product.find(function (err, items) {
        res.render('adminFeaturedCat/birthday', {
           items:items,
            count: count
        });
    });
});

/*
 * GET add product
 */
router.get('/add-birthday',isAdmin,  function (req, res) {

    var title = "";
    var desc = "";
    var price = "";
    var seller = "";
    var discount = "";
    price_off ="";
    var spec = "";

    Category.find(function (err, categories) {
        res.render('adminFeaturedCat/add_birthday', {
            title: title,
            desc: desc,
            categories: categories,
            price: price,
            spec:spec,
            price_off:price_off,
            seller:seller,
            discount:discount
        });
    });


});

/*
 * POST add product
 */
router.post('/add-birthday', function (req, res) {

    var imageFile = typeof req.files.image !== "undefined" ? req.files.image.name : "";

    req.checkBody('title', 'Title must have a value.').notEmpty();
    req.checkBody('desc', 'Description must have a value.').notEmpty();
    req.checkBody('seller', 'seller must have a value.').notEmpty();
    req.checkBody('price', 'Price must have a value.').notEmpty();
    req.checkBody('price_off', 'Price discount must have a value.').notEmpty();
    req.checkBody('image', 'You must upload an image').isImage(imageFile);

    var title = req.body.title;
    var slug = title.replace(/\s+/g, '-').toLowerCase();
    var desc = req.body.desc;
    var price = req.body.price;
    var price_off =req.body.price_off;
    var seller = req.body.seller;
    var spec =req.body.spec;
    var category = req.body.category;
    var discount = req.body.discount;

    var errors = req.validationErrors();

    if (errors) {
        Category.find(function (err, categories) {
            res.render('adminFeaturedCat/add_birthday', {
                errors: errors,
                title: title, 
                desc: desc,
                categories: categories,
                price: price,
                price_off:price_off,
                seller:seller,
                spec:spec,
                discount:discount
            });
        });
    } else {
        Product.findOne({slug: slug}, function (err, product) {
            if (product) {
                req.flash('danger', ' item title exists, choose another.');
                Category.find(function (err, categories) {
                    res.render('adminFeaturedCat/add_birthday', {
                        title: title,
                        desc: desc,
                        categories: categories,
                        price: price,
                        price_off:price_off,
                        seller: seller,
                        spec:spec,
                        discount:discount
                    });
                });
            } else {

                var product = new Product({
                    title: title,
                    slug: slug,
                    desc: desc,
                    price: price,
                    price_off:price_off,
                    seller:seller,
                    spec:spec,
                    category: category,
                    discount:discount,
                    image: imageFile
                });

                product.save(function (err) {
                    if (err)
                        return console.log(err);

                    mkdirp('public/product_images/' + product._id, function (err) {
                        return console.log(err);
                    });

                    mkdirp('public/product_images/' + product._id + '/gallery', function (err) {
                        return console.log(err);
                    });

                    mkdirp('public/product_images/' + product._id + '/gallery/thumbs', function (err) {
                        return console.log(err);
                    });

                    if (imageFile != "") {
                        var productImage = req.files.image;
                        var path = 'public/product_images/' + product._id + '/' + imageFile;

                        productImage.mv(path, function (err) {
                            return console.log(err);
                        });
                    }

                    req.flash('success', 'item added successfully');
                    res.redirect('/admin/birthday');
                });
            }
        });
    }

});

/*
 * GET edit product
 */
router.get('/edit-birthday/:id', isAdmin,  function (req, res) {

    var errors;

    if (req.session.errors)
        errors = req.session.errors;
    req.session.errors = null;

    Category.find(function (err, categories) {

        Product.findById(req.params.id, function (err, p) {
            if (err) {
                console.log(err);
                res.redirect('/admin/birthday');
            } else {
                var galleryDir = 'public/product_images/' + p._id + '/gallery';
                var galleryImages = null;

                fs.readdir(galleryDir, function (err, files) {
                    if (err) {
                        console.log(err);
                    } else {
                        galleryImages = files;
                        res.render('adminFeaturedCat/edit_birthday', {
                            title: p.title,
                            errors: errors,
                            seller:p.seller,
                            spec:p.spec,
                            discount:p.discount,
                            desc: p.desc,
                            categories: categories,
                            category: p.category.replace(/\s+/g, '-').toLowerCase(),
                            price: p.price,
                            price_off:p.price_off,
                            image: p.image,
                            galleryImages: galleryImages,
                            id: p._id
                        });
                    }
                });
            }
        });

    });

});

/*
 * POST edit product
 */
router.post('/edit-birthday/:id', function (req, res) {

    var imageFile = typeof req.files.image !== "undefined" ? req.files.image.name : "";

    req.checkBody('title', 'Title must have a value.').notEmpty();
    req.checkBody('desc', 'Description must have a value.').notEmpty();
    req.checkBody('seller', 'at least one seller must have a value.').notEmpty();
    req.checkBody('price', 'Price must have a value.').notEmpty();
    req.checkBody('price_off', 'Price_off must have a value.').notEmpty();
    req.checkBody('image', 'You must upload an image').isImage(imageFile);

    var title = req.body.title;
    var slug = title.replace(/\s+/g, '-').toLowerCase();
    var desc = req.body.desc;
    var price = req.body.price;
    var price_off = req.body.price_off;
    var category = req.body.category;
    var pimage = req.body.pimage;
    var seller = req.body.seller;
    var spec = req.body.spec;
    var discount = req.body.discount;
    var id = req.params.id;

    var errors = req.validationErrors();

    if (errors) {
        req.session.errors = errors;
        res.redirect('/admin/birthday/edit-birthday/' + id);
    } else {
        Product.findOne({slug: slug, _id: {'$ne': id}}, function (err, p) {
            if (err)
                console.log(err);

            if (p) {
                req.flash('danger', ' Item title exists, choose another.');
                res.redirect('/admin/birthday/edit-birthday/' + id);
            } else {
                Product.findById(id, function (err, p) {
                    if (err)
                        console.log(err);
                        
                    p.title = title;
                    p.slug = slug;
                    p.desc = desc;
                    p.seller =seller;
                    p.spec =spec;
                    p.discount =discount;
                    p.price = price;
                    p.price_off =price_off;
                    p.category = category;
                    if (imageFile != "") {
                        p.image = imageFile;
                    }

                    p.save(function (err) {
                        if (err)
                            console.log(err);

                        if (imageFile != "") {
                            if (pimage != "") {
                                fs.remove('public/product_images/' + id + '/' + pimage, function (err) {
                                    if (err)
                                        console.log(err);
                                });
                            }

                            var productImage = req.files.image;
                            var path = 'public/product_images/' + id + '/' + imageFile;

                            productImage.mv(path, function (err) {
                                return console.log(err);
                            });

                        }

                        req.flash('success', 'item edited successfully');
                        res.redirect('/admin/birthday/edit-birthday/' + id);
                    });

                });
            }
        });
    }

});

/*
 * POST product gallery
 */
router.post('/product-gallery/:id', function (req, res) {

    var productImage = req.files.file;
    var id = req.params.id;
    var path = 'public/product_images/' + id + '/gallery/' + req.files.file.name;
    var thumbsPath = 'public/product_images/' + id + '/gallery/thumbs/' + req.files.file.name;

    productImage.mv(path, function (err) {
        if (err)
            console.log(err);

        resizeImg(fs.readFileSync(path), {width: 100, height: 100}).then(function (buf) {
            fs.writeFileSync(thumbsPath, buf);
        });
    });

    res.sendStatus(200);

});

/*
 * GET delete image
 */
router.get('/delete-image/:image',isAdmin,  function (req, res) {

    var originalImage = 'public/product_images/' + req.query.id + '/gallery/' + req.params.image;
    var thumbImage = 'public/product_images/' + req.query.id + '/gallery/thumbs/' + req.params.image;

    fs.remove(originalImage, function (err) {
        if (err) {
            console.log(err);
        } else {
            fs.remove(thumbImage, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    req.flash('success', 'Image deleted successfully');
                    res.redirect('/admin/birthday/edit-birthday/' + req.query.id);
                }
            });
        }
    });
});

/*
 * GET delete product
 */
router.get('/delete-birthday/:id', isAdmin, function (req, res) {

    var id = req.params.id;
    var path = 'public/product_images/' + id;

    fs.remove(path, function (err) {
        if (err) {
            console.log(err);
        } else {
            Product.findByIdAndRemove(id, function (err) {
                console.log(err);
            });
            
            req.flash('success', 'item deleted successfully');
            res.redirect('/admin/birthday');
        }
    });

});

// Exports
module.exports = router;


