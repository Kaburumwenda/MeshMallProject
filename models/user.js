var mongoose = require('mongoose');

// User Schema
var UserSchema = mongoose.Schema({
   
    firstname: {
        type: String,
        required: true
    },
   
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    admin: {
        type: Number
    },
    employee: {
        type: Number
    },
    customer: {
        type: Number
    }
    
});

var User = module.exports = mongoose.model('User', UserSchema);

