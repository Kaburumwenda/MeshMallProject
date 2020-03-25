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
 * GET add JEWELLERY
 
 product to cart
 */
router.get('/jewellery/add/:product', function (req, res) {
    var slug = req.params.product;
            Jewellery.findOne({slug: slug}, function (err, p) {
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
 * GET add SPORT 
 
 product to cart
 */
router.get('/sport/add/:product', function (req, res) {
    var slug = req.params.product;
            Sport.findOne({slug: slug}, function (err, p) {
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
 * GET add  WOMEN AND FASHION 
 
 product to cart
 */
router.get('/women/add/:product', function (req, res) {
    var slug = req.params.product;
            Women.findOne({slug: slug}, function (err, p) {
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
 * GET add  WOMEN AND FASHION 
 
 product to cart
 */
router.get('/muslim/add/:product', function (req, res) {
    var slug = req.params.product;
            Muslim.findOne({slug: slug}, function (err, p) {
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
 * GET add  MEN AND FASHION 
 
 product to cart
 */
router.get('/men/add/:product', function (req, res) {
    var slug = req.params.product;
            Men.findOne({slug: slug}, function (err, p) {
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
 * GET add  MEN AND FASHION 
 
 product to cart
 */
router.get('/phone/add/:product', function (req, res) {
    var slug = req.params.product;
            Phone.findOne({slug: slug}, function (err, p) {
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
 * GET add  MEN AND FASHION 
 
 product to cart
 */
router.get('/entertain/add/:product', function (req, res) {
    var slug = req.params.product;
            Entertain.findOne({slug: slug}, function (err, p) {
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
 * GET add  MEN AND FASHION 
 
 product to cart
 */
router.get('/home/add/:product', function (req, res) {
    var slug = req.params.product;
            Home.findOne({slug: slug}, function (err, p) {
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
 * GET add  ELECTRICAL PRODUCTS
 
 product to cart
 */
router.get('/electrical/add/:product', function (req, res) {
    var slug = req.params.product;
            Electrical.findOne({slug: slug}, function (err, p) {
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

    /* GET add  lAPTOPS  & ACCESSORIES
 
 product to cart
 */
router.get('/laptop/add/:product', function (req, res) {
    var slug = req.params.product;
            Laptop.findOne({slug: slug}, function (err, p) {
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

    /* GET add  BEER, WINES & SPIRITS
 
 product to cart
 */
router.get('/wine/add/:product', function (req, res) {
    var slug = req.params.product;
            Wine.findOne({slug: slug}, function (err, p) {
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

       /* GET add  SHOOPING BAGS
 
 product to cart
 */
router.get('/shoppingbags/add/:product', function (req, res) {
    var slug = req.params.product;
            Shoppingbags.findOne({slug: slug}, function (err, p) {
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


       /* GET add  PETS
 
 product to cart
 */
router.get('/pets/add/:product', function (req, res) {
    var slug = req.params.product;
            Pets.findOne({slug: slug}, function (err, p) {
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

          /* GET add  PETS
 
 product to cart
 */
router.get('/golf/add/:product', function (req, res) {
    var slug = req.params.product;
            Golf.findOne({slug: slug}, function (err, p) {
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

              /* GET add  BIRTHDAY GIFTS
 
 product to cart
 */
router.get('/birthday/add/:product', function (req, res) {
    var slug = req.params.product;
            Birthday.findOne({slug: slug}, function (err, p) {
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

                  /* GET add  PETS
 
 product to cart
 */
router.get('/camera/add/:product', function (req, res) {
    var slug = req.params.product;
            Camera.findOne({slug: slug}, function (err, p) {
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

                      /* GET add  PETS
 
 product to cart
 */
router.get('/bookshop/add/:product', function (req, res) {
    var slug = req.params.product;
            Bookshop.findOne({slug: slug}, function (err, p) {
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

                          /* GET add  PETS
 
 product to cart
 */
router.get('/furniture/add/:product', function (req, res) {
    var slug = req.params.product;
            Furniture.findOne({slug: slug}, function (err, p) {
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

                             /* GET add  WINES SPIRIT AND BEAR
 
 product to cart
 */
router.get('/bear/add/:product', function (req, res) {
    var slug = req.params.product;
            Bear.findOne({slug: slug}, function (err, p) {
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


                          /* GET add  OFFICE
 
 product to cart
 */
router.get('/office/add/:product', function (req, res) {
    var slug = req.params.product;
            Office.findOne({slug: slug}, function (err, p) {
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

                              /* GET add  OFFICE
 
 product to cart
 */
router.get('/sanitary/add/:product', function (req, res) {
    var slug = req.params.product;
            Sanitary.findOne({slug: slug}, function (err, p) {
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
