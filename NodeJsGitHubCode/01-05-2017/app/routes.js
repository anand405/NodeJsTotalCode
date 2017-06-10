var productsCtrl = require("./products/products.controller");
var userCtrl = require("./user/user.controller");
module.exports = function(app) {
    app.get("/user/register", userCtrl.getRegistrationPage);
    app.post("/user/register", userCtrl.registerUser);

    app.get("/products", productsCtrl.get);
}