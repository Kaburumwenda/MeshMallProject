var express = require('express');
const router = express.Router();

const CartData = require('../models/cart');


router.get('/',(req,res,next)=>{
   const cartData = req.session.cart;
   console.log(cartData)
});

module.exports = router;