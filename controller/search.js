const express = require('express');
const router = express.Router();

var Grocery = require('../models/grocery');

router.get('/',(req,res,next)=>{
    Grocery.find(function(err, data){
       res.render('categories/grocery',{
           title:'meshmall',
           data:data
       }
       );
    })
})
module.exports =router;