var productsCtrl = require("./products/products.controller");
var userCtrl = require("./user/user.controller");
module.exports = function(app) {
    app.get("/user/register", userCtrl.getRegistrationPage);
    app.post("/user/register", userCtrl.registerUser);

    app.get("/products", productsCtrl.get);
    app.get("/products/:pageNumber", productsCtrl.getByPage);
    app.get("/api/products", productsCtrl.apiGet);
    app.post("/products/search", productsCtrl.search);
}