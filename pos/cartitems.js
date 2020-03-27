const express = require('express');
const router = express.Router();

//GET ALL CART ITEMS
const CartItems = require('../models/cart');

router.post('/add-cartitems', (req,res)=>{

    CartItems.find(function(err,cartitems){
        res.render('pos/cartitems',
        //cartitems:req.session.cart
        )
        
    })
    
})

module.exports= router;

/*
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
*/