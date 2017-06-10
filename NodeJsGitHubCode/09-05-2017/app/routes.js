var productsCtrl = require("./products/products.controller");
var passport = require("passport");
var userCtrl = require("./user/user.controller");
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

    return app;
}