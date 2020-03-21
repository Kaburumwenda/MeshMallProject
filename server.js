const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userCon = require('./routes/urs');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var expressValidator = require('express-validator');
var fileUpload = require('express-fileupload');
var passport = require('passport');
const config = require('./config/database');
const cool = require('cool-ascii-faces')
const MongoStore = require('connect-mongo')(session);


app.use(express.json());
app.use('/user', userCon);
app.get('/cool', (req, res) => res.send(cool()))

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// set global errors variable
app.locals.errors = null;



// Get Category Model
var Category = require('./models/category');

// Get all categories to pass to header.ejs
Category.find(function (err, categories) {
    if (err) {
        console.log(err);
    } else {
        app.locals.categories = categories;
    }
});


//Express fileUpload middleware
app.use(fileUpload());

// body parser middleware

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Express Session middleware
/*
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
//  cookie: { secure: true }
}));
*/
app.use(session({
    store: new MongoStore({
        url: config.database,
        ttl: 30 * 24 * 60 * 60
        
        
    }),
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true

}));

// Express Validator middleware
app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.')
                , root = namespace.shift()
                , formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    },
    customValidators: {
        isImage: function (value, filename) {
            var extension = (path.extname(filename)).toLowerCase();
            switch (extension) {
                case '.jpg':
                    return '.jpg';
                case '.jpeg':
                    return '.jpeg';
                case '.png':
                    return '.png';
                case '':
                    return '.jpg';
                default:
                    return false;
            }
        }
    }
}));

// Express Messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

// Passport Config
require('./config/passport')(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req,res,next) {
   res.locals.cart = req.session.cart;
   res.locals.user = req.user || null;
   
   next();
});

//ROUTES
var pages = require('./routes/pages.js');
//var adminPages = require('./routes/admin_pages.js');
var adminCategories = require('./routes/admin_categories.js');
var adminProducts = require('./routes/admin_products.js');
var Products = require('./routes/products.js');
var cart = require('./routes/cart.js');
var users = require('./routes/users.js');
var Trending = require('./routes/admin_trending.js');
//var Trendingadverts = require('./routes/trending.js');
const adminValentine =require('./routes/admin_valentine');
const Valentine = require('./routes/valentine');
const adminGrocery = require('./routes/adnin_grocery');
const Grocery = require('./routes/grocery');
const Payment = require('./routes/payment');
const Search = require('./routes/search');
const adminAccounts = require('./routes/admin_accounts');
const adminBabies = require('./routes/admin_baby');
const Babyproduct =require('./routes/babyproducts')
const adminBeauty = require('./routes/admin_beauty');
const Beauty = require('./routes/beauty');
const adminJewelleries = require('./routes/admin_jewelleries');
const Jewellery = require('./routes/jewelleries');
const adminSport = require('./routes/admin_sports');
const Sports =require('./routes/sports');
const adminWomen =require('./routes/admin_women');
const Women = require('./routes/women');



app.use('/',pages);
//app.use('/admin/pages',adminPages);
app.use('/admin/categories',adminCategories);
app.use('/admin/products',adminProducts);
app.use('/products',Products);
app.use('/cart',cart);
app.use('/users',users);
app.use('/admin/trending',Trending);
//app.use('/adverts',Trendingadverts);
app.use('/admin/valentine',adminValentine);
app.use('/valentine',Valentine);
app.use('/admin/grocery',adminGrocery);
app.use('/grocery',Grocery);
app.use('/admin/payment',Payment);
app.use('/search',Search);
app.use('/admin/accounts',adminAccounts);
app.use('/admin/babyproduct',adminBabies);
app.use('/babyproduct',Babyproduct);
app.use('/admin/beauty',adminBeauty);
app.use('/beauty',Beauty);
app.use('/admin/jewelleries',adminJewelleries);
app.use('/jewelleries',Jewellery);
app.use('/admin/sports',adminSport);
app.use('/sports',Sports);
app.use('/admin/women',adminWomen);
app.use('/women',Women);


mongoose.connect(config.database,
{ useNewUrlParser: true,  useUnifiedTopology: true  },
()=>console.log('mongodb connected successfully'));

var port =process.env.PORT || 5000;
app.listen(port,()=>console.log(`server up on port:${port}`));