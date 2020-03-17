var express = require('express');
var router = express.Router();
var mkdirp = require('mkdirp');
var fs = require('fs-extra');
var resizeImg = require('resize-img');
var auth = require('../config/auth');
var isAdmin = auth.isAdmin;

// Get Product model
var Accounts = require('../models/user');

// Get Category model
var Category = require('../models/category');

/*
 * GET products index
 */
router.get('/', isAdmin,  function (req, res) {
    var count;

    Accounts.count(function (err, c) {
        count = c;
    });

    Accounts.find(function (err, accounts) {
        res.render('admin/accounts', {
            accounts: accounts,
            count: count
        });
    });
});



/*
 * GET edit product
 */
router.get('/edit-account/:id', isAdmin,  function (req, res) {

    var errors;

    if (req.session.errors)
        errors = req.session.errors;
    req.session.errors = null;

    

        Accounts.findById(req.params.id, function (err, p) {
            if (err) {
                console.log(err);
                res.redirect('/admin/accounts');
            } else {
                        res.render('admin/edit_accounts', {
                            firstname: p.firstname,
                            errors: errors,
                            lastname:p.lastname,
                            username:p.username,
                            email: p.email,
                            admin:p.admin,
                            employee:p.employee,
                            customer:p.customer,
                            phone:p.phone,
                            
                            id: p._id
                        });
                    }
                });
            });

/*
 * POST edit product
 */
router.post('/edit-account/:id', function (req, res) {

    req.checkBody('firstname', 'firstname is required!').notEmpty();
    req.checkBody('lastname', 'lastname is required!').notEmpty();
    req.checkBody('email', 'Email is required!').isEmail();
    req.checkBody('username', 'Username is required!').notEmpty();
    req.checkBody('phone', 'Phone number is required!').notEmpty();
  

    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var username = req.body.username;
    var phone = req.body.phone;
    var admin =req.body.admin;
    var employee = req.body.employee;
    var customer = req.body.customer;
   var id= req.params.id;

    var errors = req.validationErrors();

    if (errors) {
        req.session.errors = errors;
        res.redirect('/admin/accounts/edit-account/' + id);
    }  else {
                Accounts.findById(id,function (err, p) {
                    if (err)
                        console.log(err);
                    p.firstname = firstname;
                   
                    p.lastname =lastname;
                    p.username =username;
                    p.email =email;
                    p.phone =phone;
                    p.admin =admin;
                    p.employee = employee;
                    p.customer = customer;

                    p.save(function (err) {
                        if (err)
                            console.log(err);

                        req.flash('success', 'Account edited successfully');
                        res.redirect('/admin/accounts/edit-account/' + id);
                    });

                });
            }
        
    

});


/*
 * GET delete product
 */
router.get('/delete-account/:id', isAdmin, function (req, res) {

    var id = req.params.id;
   
//findByIdAndRemove
            Accounts.findByIdAndDelete(id, function (err) {
                console.log(err);
            });
            
            req.flash('success', 'Account deleted successfully');
            res.redirect('/admin/accounts');
        
    

});

// Exports
module.exports = router;


