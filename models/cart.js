var mongoose = require('mongoose');

// Product Schema
var ProductSchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    },
    qty:{
        type:String,
        required:true
    },
    image: {
        type: String
    },
    phone: {
        type: Number,
        required: true
    }
    
})

var Product = module.exports = mongoose.model('Cart', ProductSchema);
