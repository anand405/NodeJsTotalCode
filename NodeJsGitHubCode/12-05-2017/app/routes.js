var productsCtrl = require("./products/products.controller");
var passport = require("passport");
var userCtrl = require("./user/user.controller");
var fileCtrl = require("./fileupload/fileuploadCtrl");
var request = require("request");
module.exports = function(app) {
    app.get("/user/register", userCtrl.getRegistrationPage);
    app.post("/user/register", userCtrl.registerUser);
    app.post("/api/register", userCtrl.registerUser);

    app.get("/products", require('connect-ensure-login').ensureLoggedIn(), productsCtrl.get);
    app.get("/products/:pageNumber", require('connect-ensure-login').ensureLoggedIn(), productsCtrl.getByPage);
    app.get("/api/products", require('connect-ensure-login').ensureLoggedIn(), productsCtrl.apiGet);
    app.post("/products/search", require('connect-ensure-login').ensureLoggedIn(), productsCtrl.search);
    app.get("/login", function(req, res) {
        res.render("login", { title: "Login" });
    });
    app.post("/api/login", userCtrl.login);
    app.get("/api/getProfile", userCtrl.getProfileDetails);
    app.post('/login',
        passport.authenticate('local', {
            failureRedirect: '/login',

        }),
        function(req, res) {
            res.redirect('/products/search');
        });
    app.get('/login/facebook',
        passport.authenticate('facebook', {

            failureRedirect: '/login'
        }),
        function(req, res) {
            console.log("User Authenticated");
            console.log(req.body);
            res.redirect("/products/search");
        });


    app.get('/login/facebook/callback',
        passport.authenticate('facebook', {

            failureRedirect: '/login'
        }),
        function(req, res) {
            res.redirect("/products/search");
        });
    app.get("/api/upload", function(req, res) {
        res.render("fileupload");
    });
    app.post("/api/upload", fileCtrl.upload);

    app.post("/api/sendSMS", function(req, res) {
        var hash = "&hash=349bead9391edd6439e857e83f4069dc22d5ca6194f384f7dd51e7a6f9b49119";
        var username = "pvskiran.trainer@gmail.com";
        var numbers = "&numbers=" + req.body.phonenumber;
        var message = "&message=" + req.body.message;
        var sender = "&sender=" + req.body.sender;
        var url = "http://api.textlocal.in/send/?username=";
        var buildQueryString = url + username + hash + numbers + message + sender;
        console.log(buildQueryString);
        let options = {
            uri: buildQueryString,
            method: "GET"
        };
        request(options, function(err, response) {
            if (err) {
                res.json(err);
            } else {
                res.json(response.body);
            }
        });
    });

    app.post("/api/getProductsFromWM", function(req, res) {

        var buildQueryString = "http://api.walmartlabs.com/v1/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query=" + req.body.search;
        let options = {
            uri: buildQueryString,
            method: "GET"
        };
        request(options, function(err, response) {
            if (err) {
                res.json(err);
            } else {
                res.json(response.body);
            }
        });
    });
    return app;
}