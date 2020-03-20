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

/*
 * GET add product to cart
 */
router.get('/add/:product', function (req, res) {

    var slug = req.params.product;

    Product.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.cart == "undefined") {
            req.session.cart = [];
            req.session.cart.push({
                title: slug,
                qty: 1,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var cart = req.session.cart;
            var newItem = true;

            for (var i = 0; i < cart.length; i++) {
                if (cart[i].title == slug) {
                    cart[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                cart.push({
                    title: slug,
                    qty: 1,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to Cart successfully');
        res.redirect('back');
    });

});


/*
 * GET add Grocery   
 
 product to cart
 */
router.get('/grocery/add/:product', function (req, res) {

    var slug = req.params.product;

    Grocery.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);

        if (typeof req.session.cart == "undefined") {
            req.session.cart = [];
            req.session.cart.push({
                title: slug,
                qty: 1,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var cart = req.session.cart;
            var newItem = true;

            for (var i = 0; i < cart.length; i++) {
                if (cart[i].title == slug) {
                    cart[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                cart.push({
                    title: slug,
                    qty: 1,
                    price:p.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to Cart successfully');
        res.redirect('back');
    });

});


/*GET ADD BABY
//PRODUCT
// TO CART
*/

router.get('/babyproducts/add/:product', function (req, res) {

    var slug = req.params.product;

    Babyproduct.findOne({slug: slug}, function (err, pi) {
        if (err)
            console.log(err);

        if (typeof req.session.cart == "undefined") {
            req.session.cart = [];
            req.session.cart.push({
                title: slug,
                qty: 1,
                //price: parseFloat(p.price).toFixed(2),
                price:p.price,
                image: '/product_images/' + pi._id + '/' + pi.image
            });
        } else {
            var cart = req.session.cart;
            var newItem = true;

            for (var i = 0; i < cart.length; i++) {
                if (cart[i].title == slug) {
                    cart[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                cart.push({
                    title: slug,
                    qty: 1,
                    
                    price:pi.price,
                    //price: parseFloat(p.price).toFixed(2),
                    image: '/product_images/' + pi._id + '/' + pi.image
                });
            }
        }

//        console.log(req.session.cart);
        req.flash('success', 'Product added to Cart successfully');
        res.redirect('back');
    });

});

/*
 * GET add Valentine  
 
 product to cart
 */
router.get('/valentine/add/:product', function (req, res) {
var slug = req.params.product;
        Valentine.findOne({slug: slug}, function (err, p) {
        if (err)
            console.log(err);
        if (typeof req.session.cart == "undefined") {
            req.session.cart = [];
            req.session.cart.push({
                title: slug,
                qty: 1,
                price:p.price,
                image: '/product_images/' + p._id + '/' + p.image
            });
        } else {
            var cart = req.session.cart;
            var newItem = true;

            for (var i = 0; i < cart.length; i++) {
                if (cart[i].title == slug) {
                    cart[i].qty++;
                    newItem = false;
                    break;
                }
            }

            if (newItem) {
                cart.push({
                    title: slug,
                    qty: 1,
                    price:p.price,
                    image: '/product_images/' + p._id + '/' + p.image
                });
            }
        }
        req.flash('success', 'Product added to Cart successfully');
        res.redirect('back');
    });

});

/*
 * GET add Beauty and Makeups
 
 product to cart
 */
router.get('/beauty/add/:product', function (req, res) {
    var slug = req.params.product;
            Beauty.findOne({slug: slug}, function (err, p) {
            if (err)
                console.log(err);
            if (typeof req.session.cart == "undefined") {
                req.session.cart = [];
                req.session.cart.push({
                    title: slug,
                    qty: 1,
                    price:p.price,
                    image: '/product_images/' + p._id + '/' + p.image
                });
            } else {
                var cart = req.session.cart;
                var newItem = true;
    
                for (var i = 0; i < cart.length; i++) {
                    if (cart[i].title == slug) {
                        cart[i].qty++;
                        newItem = false;
                        break;
                    }
                }
    
                if (newItem) {
                    cart.push({
                        title: slug,
                        qty: 1,
                        price:p.price,
                        image: '/product_images/' + p._id + '/' + p.image
                    });
                }
            }
            req.flash('success', 'Product added to Cart successfully');
            res.redirect('back');
        });
    
    });
/*
 * GET checkout page
 */
router.get('/checkout', function (req, res) {

    if (req.session.cart && req.session.cart.length == 0) {
        delete req.session.cart;
        res.redirect('/cart/checkout');
    } else {
        res.render('checkout', {
            title: 'Checkout',
            cart: req.session.cart
        });
    }

});

/*
 * GET update product
 */
router.get('/update/:product', function (req, res) {

    var slug = req.params.product;
    var cart = req.session.cart;
    var action = req.query.action;

    for (var i = 0; i < cart.length; i++) {
        if (cart[i].title == slug) {
            switch (action) {
                case "add":
                    cart[i].qty++;
                    break;
                case "remove":
                    cart[i].qty--;
                    if (cart[i].qty < 1)
                        cart.splice(i, 1);
                    break;
                case "clear":
                    cart.splice(i, 1);
                    if (cart.length == 0)
                        delete req.session.cart;
                    break;
                default:
                    console.log('update problem');
                    break;
            }
            break;
        }
    }

    req.flash('success', 'Cart  updated!');
    res.redirect('/cart/checkout');

});

/*
 * GET clear cart
 */
router.get('/clear', function (req, res) {

    delete req.session.cart;
    
    req.flash('success', 'Cart cleared successfully');
    res.redirect('/cart/checkout');

});

/*
 * GET buy now
 */
router.get('/buynow', function (req, res) {

    delete req.session.cart;
    
    res.sendStatus(200);

});

// Exports
module.exports = router;
