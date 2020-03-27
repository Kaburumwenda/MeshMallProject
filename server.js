const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userCon = require('./controller/urs');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var expressValidator = require('express-validator');
var fileUpload = require('express-fileupload');
var passport = require('passport');
const config = require('./config/database');
const cool = require('cool-ascii-faces');
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
   res.locals.fav = req.session.fav;
   res.locals.user = req.user || null;
   
   next();
});

//ROUTES
var pages = require('./controller/pages.js');
//var adminPages = require('./routes/admin_pages.js');
var adminCategories = require('./controller/admin_categories.js');
var adminProducts = require('./controller/admin_products.js');
var Products = require('./controller/products.js');
var cart = require('./controller/cart.js');
const Fav = require('./controller/favourite');
var users = require('./controller/users.js');
var Trending = require('./controller/admin_trending.js');
//var Trendingadverts = require('./routes/trending.js');
const adminValentine =require('./controller/admin_valentine');
const Valentine = require('./controller/valentine');
const adminGrocery = require('./controller/adnin_grocery');
const Grocery = require('./controller/grocery');
const Payment = require('./controller/payment');
const Search = require('./controller/search');
const adminAccounts = require('./controller/admin_accounts');
const adminBabies = require('./controller/admin_baby');
const Babyproduct =require('./controller/babyproducts')
const adminBeauty = require('./controller/admin_beauty');
const Beauty = require('./controller/beauty');
const adminJewelleries = require('./controller/admin_jewelleries');
const Jewellery = require('./controller/jewelleries');
const adminSport = require('./controller/admin_sports');
const Sports =require('./controller/sports');
const adminWomen =require('./controller/admin_women');
const Women = require('./controller/women');
const adminMuslim = require('./controller/admin_muslim');
const Muslim = require('./controller/muslim');
const adminMen =require('./controller/admin_men');
const Men = require('./controller/men');
const adminPhones = require('./controller/admin_phones');
const Phone = require('./controller/phones');
const adminEntertain = require('./controller/admin_entertain');
const Entertain = require('./controller/entertain');
const adminHome = require('./controller/admin_home');
const Home = require('./controller/home');
const adminElectrical = require('./controller/admin_electrical');
const Electrical = require('./controller/electrical');
const adminLaptops = require('./controller/admin_laptop');
const Laptop =require('./controller/laptop');
const Wine = require('./controller/wines');
const adminWine = require('./controller/admin_wines');
const adminShoppingbags = require('./controller/admin_shoppingbags');
const Shoppingbags = require('./controller/shoppingbags');
const adminPets = require('./controller/admin_pets');
const Pets = require('./controller/pets');
const adminGolf = require('./controller/admin_golf');
const Golf = require('./controller/golf');
const adminBirthday = require('./controller/admin_birthday');
const Birthday = require('./controller/birthday');
const adminCamera = require('./controller/admin_camera');
const Camera = require('./controller/camera');
const adminBookshop = require('./controller/admin_bookshop');
const Bookshop = require('./controller/bookshop');
const  adminFurniture = require('./controller/admin_furniture');
const Furniture = require('./controller/furniture');
const adminBear = require('./controller/admin_bear');
const Bear = require('./controller/bear');
const adminOffice = require('./controller/admin_office');
const Office = require('./controller/office');
const adminSanitary = require('./controller/admin_sanitary');
const Sanitary = require('./controller/sanitary');
const Wellcome = require('./controller/wellcome');



app.use('/',pages);
//app.use('/admin/pages',adminPages);
app.use('/admin/categories',adminCategories);
app.use('/admin/products',adminProducts);
app.use('/products',Products);
app.use('/cart',cart);
app.use('/fav',Fav);
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
app.use('/admin/muslim',adminMuslim);
app.use('/muslim',Muslim);
app.use('/admin/men',adminMen);
app.use('/men',Men);
app.use('/admin/phones',adminPhones);
app.use('/phones',Phone);
app.use('/admin/entertain',adminEntertain);
app.use('/entertain',Entertain);
app.use('/admin/home',adminHome);
app.use('/home',Home);
app.use('/admin/electrical',adminElectrical);
app.use('/electrical',Electrical);
app.use('/admin/laptop',adminLaptops);
app.use('/laptop',Laptop);
app.use('/admin/wine',adminWine);
app.use('/wine',Wine);
app.use('/admin/shoppingbags',adminShoppingbags);
app.use('/shoppingbags',Shoppingbags)
app.use('/admin/pets',adminPets);
app.use('/pets',Pets);
app.use('/admin/golf',adminGolf);
app.use('/golf',Golf);
app.use('/admin/birthday',adminBirthday);
app.use('/birthday',Birthday);
app.use('/admin/camera',adminCamera);
app.use('/camera',Camera);
app.use('/admin/bookshop',adminBookshop);
app.use('/bookshop',Bookshop)
app.use('/admin/furniture',adminFurniture);
app.use('/furniture',Furniture);
app.use('/admin/bear',adminBear);
app.use('/bear',Bear);
app.use('/admin/office',adminOffice);
app.use('/office',Office);
app.use('/admin/sanitary',adminSanitary);
app.use('/sanitary',Sanitary);
app.use('/wellcome',Wellcome);

//POS
//POS
const cartItems = require('./pos/cartitems');

app.use('/cartitems',cartItems);

mongoose.connect(config.database,
{ useNewUrlParser: true,  useUnifiedTopology: true  },
()=>console.log('mongodb connected successfully'));

var port =process.env.PORT || 5000;
app.listen(port,()=>console.log(`server up on port:${port}`));