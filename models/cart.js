var mongoose = require('mongoose');

// Product Schema
var CartSchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    },
    
    qty:{
        type:Number,
        required:true
    },
    image: {
        type: String
    },
    
    
})

var Cart = module.exports = mongoose.model('Cart_items', CartSchema);
