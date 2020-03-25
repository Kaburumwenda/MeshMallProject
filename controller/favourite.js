var express = require('express');
var router = express.Router();


// Get Product model
var Product = require('../models/product');

//Get Grocery Model

var Grocery = require('../models/grocery');

//Get Baby Product Model

const Babyproduct = require('../models/baby');

//GET VALENTINE product

const Valentine = require('../models/valentine');

//GET BEAUTY & MAKEUPS PRODUCTS

const Beauty = require('../models/beauty');

//GET JEWELLERY PRODUCTS

const Jewellery = require('../models/jewelleries');

//GET SPORT PRODUCTS
//324 
const Sport = require('../models/sport');

//GET WOMEN AND FASHION PRODUCTS.
//369
const Women = require('../models/women');

//GET MUSLIM FASHION ITEMS
//425
const Muslim = require('../models/muslim');

//GET MEN FASHION ITEMS
//476
const Men = require('../models/men');

//GET PHONE AND TABLETS PRODUCTS
//524
const Phone = require('../models/phone');

//get entertainment INSTRUMENTS
//570
const Entertain = require('../models/entertain');

//GET HOME ASSESTS
//623
const Home = require('../models/home');

//get electrical products
//671
const Electrical = require('../models/electrical');

//GET LAPTOPS & ACCESSORIES
//721
const Laptop = require('../models/laptop');

//GET BEER, WINES & SPIRITS PRODUCTS
//767
const Wine = require('../models/wines');

//GET SHOPPING BAGS
//816
const Shoppingbags = require('../models/shoppingbags');

//GET PETS ITEMS
//867
const Pets = require('../models/pets');

//GET PETS ITEMS
//910
const Golf = require('../models/golf');

//GET PETS ITEMS
//960
const Birthday = require('../models/birthday');

//GET CAMERA AND WATCHES
//1008
const Camera = require('../models/camera');

//GET Bookshop
//1056
const Bookshop = require('../models/bookshop');

//GET Furniture
//1056
const Furniture = require('../models/furniture');

//GET Furniture
//1155
const Bear = require('../models/bear');

//GET OFFICE
//1196
const Office = require('../models/office');

//GET OFFICE
//1196
const Sanitary = require('../models/sanitary');


/*
GET PRODUCT TO 
FAVOURITE
*/
router.get('/add/:product', function (req, res) {

    var slug = req.params.product;

    Product.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});

/*GET GROCERY
TO FAVOURITE
*/

router.get('/grocery/add/:product', function (req, res) {

    var slug = req.params.product;

    Grocery.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});

/*GET BABYPRODUCT
TO FAVOURITE
*/

router.get('/babyproduct/add/:product', function (req, res) {

    var slug = req.params.product;

    Babyproduct.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET VALENTINE
TO FAVOURITE
*/

router.get('/valentine/add/:product', function (req, res) {

    var slug = req.params.product;

    Valentine.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET BEAUTY
TO FAVOURITE
*/

router.get('/beauty/add/:product', function (req, res) {

    var slug = req.params.product;

    Beauty.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET JEWELLERY
TO FAVOURITE
*/

router.get('/jewellery/add/:product', function (req, res) {

    var slug = req.params.product;

    Jewellery.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET SPORT
TO FAVOURITE
*/

router.get('/sport/add/:product', function (req, res) {

    var slug = req.params.product;

    Sport.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET WOMEN
TO FAVOURITE
*/

router.get('/women/add/:product', function (req, res) {

    var slug = req.params.product;

    Women.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET MUSLIM
TO FAVOURITE
*/

router.get('/muslim/add/:product', function (req, res) {

    var slug = req.params.product;

    Muslim.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET MEN
TO FAVOURITE
*/

router.get('/men/add/:product', function (req, res) {

    var slug = req.params.product;

    Men.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET ENTERTAINMENT
TO FAVOURITE
*/

router.get('/entertain/add/:product', function (req, res) {

    var slug = req.params.product;

    Entertain.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET PHONE
TO FAVOURITE
*/

router.get('/phone/add/:product', function (req, res) {

    var slug = req.params.product;

    Phone.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET GROCERY
TO FAVOURITE
*/

router.get('/home/add/:product', function (req, res) {

    var slug = req.params.product;

    Home.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET GROCERY
TO FAVOURITE
*/

router.get('/electrical/add/:product', function (req, res) {

    var slug = req.params.product;

    Electrical.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET GROCERY
TO FAVOURITE
*/

router.get('/laptop/add/:product', function (req, res) {

    var slug = req.params.product;

    Laptop.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET GROCERY
TO FAVOURITE
*/

router.get('/wine/add/:product', function (req, res) {

    var slug = req.params.product;

    Wine.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET SHOPPINGBAGS
TO FAVOURITE
*/

router.get('/shoppingbags/add/:product', function (req, res) {

    var slug = req.params.product;

    Shoppingbags.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});

/*GET pets
TO FAVOURITE
*/

router.get('/pets/add/:product', function (req, res) {

    var slug = req.params.product;

    Pets.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});


/*GET GOLF
TO FAVOURITE
*/

router.get('/golf/add/:product', function (req, res) {

    var slug = req.params.product;

    Golf.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});

/*GET BIRTHDAY
TO FAVOURITE
*/

router.get('/birthday/add/:product', function (req, res) {

    var slug = req.params.product;

    Birthday.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});

/*GET CAMERA
TO FAVOURITE
*/

router.get('/camera/add/:product', function (req, res) {

    var slug = req.params.product;

    Camera.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});

/*GET GROCERY
TO FAVOURITE
*/

router.get('/bookshop/add/:product', function (req, res) {

    var slug = req.params.product;

    Bookshop.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});

/*GET FURNITURE
TO FAVOURITE
*/

router.get('/furniture/add/:product', function (req, res) {

    var slug = req.params.product;

    Furniture.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});

/*GET GROCERY
TO FAVOURITE
*/

router.get('/bear/add/:product', function (req, res) {

    var slug = req.params.product;

    Bear.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});

/*GET OFFICE
TO FAVOURITE
*/

router.get('/office/add/:product', function (req, res) {

    var slug = req.params.product;

    Office.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});

/*GET GROCERY
TO FAVOURITE
*/

router.get('/sanitary/add/:product', function (req, res) {

    var slug = req.params.product;

    Sanitary.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.fav == "undefined") {
            req.session.fav = [];
            req.session.fav.push({
                title: slug,
                price_off:p.price_off,
                discount:p.discount,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var fav = req.session.fav;
            var newItem = true;

            for (var i = 0; i < fav.length; i++) {
                if (fav[i].title == slug) {
                    fav[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                fav.push({
                    title: slug,
                    price_off:p.price_off,
                    discount:p.discount,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to favourite successfully');
        res.redirect('back');
    });

});




/*
 * GET FAVORITE page
 */
router.get('/favourite', function (req, res) {

    if (req.session.fav && req.session.fav.length == 0) {
        delete req.session.fav;
        res.redirect('/fav/favourite');
    } else {
        res.render('favourite', {
            title: 'favourite',
            fav: req.session.fav
        });
    }

});

/*
 * GET clear FAVOURITE
 */
router.get('/delete', function (req, res) {

    delete req.session.fav;
    
    req.flash('success', 'Favourite item deleted successfully');
    res.redirect('/fav/favourite');

});

module.exports = router;