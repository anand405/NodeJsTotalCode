const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
module.exports = function() {
    var app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.set('view engine', 'ejs')
        //configure routes in routes.js
        //call the routes.js file and pass express as parameter.
        // app.get("/",function(req,res){
        //     res.send("hello");
        // });
    app.use(require('express-session')({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    require("./passport-local.js")();
    require("./passport-facebook.js")(app, passport);

    var routes = require("../app/routes.js");
    routes(app);
    return app;
}