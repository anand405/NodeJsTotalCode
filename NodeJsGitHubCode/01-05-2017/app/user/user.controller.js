var userCtrl = {};
var profileSchema = require("mongoose").model("profile");
userCtrl.getRegistrationPage = function(req, res) {
    var pageName = "Register Page";
    res.render("register", { title: pageName });
};
userCtrl.registerUser = function(req, res) {
    console.log(req.body);

    let profile = new profileSchema(req.body);

    profile.save()
        .then(function(response) {
            res.send("Thank you;");
        })
        .catch(function(err) {
            console.log(err);
            res.json("Error in Updating");
        })

};

module.exports = userCtrl;