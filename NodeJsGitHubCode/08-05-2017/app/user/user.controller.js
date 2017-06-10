var userCtrl = {};
var profileSchema = require("mongoose").model("profile");
var jwt = require("jwt-simple");
var secret = require("../../config/config");
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

userCtrl.login = function(req, res) {
    var params = req.body;
    profileSchema.findOne({ username: params.username }, function(err, user) {
        if (err) {
            return res.json({ Error: "Unable to process your request. Please try later" });
        } else if (!user) {
            return res.json({ Error: "User doesnot Exist" });
        } else if (user.password != params.password) {
            return res.json({ Error: "Invalid password" });
        } else {
            var token = jwt.encode(params.username, secret.tokenSecret);
            return res.json({ token: token });
        }


    });
};
userCtrl.getProfileDetails = function(req, res) {
    console.log(req.headers);
    var decodedData = authorize(req.headers);
    if (decodedData) {
        profileSchema.findOne({ username: decodedData })
            .then(function(userDetails) {
                res.json({ data: userDetails });
            })
            .catch(function(err) {
                res.json({ data: "Error in Fetching user details" });
            })
    }

};

function authorize(headers) {
    if (headers) {
        var decoded = jwt.decode(headers.authorization, secret.tokenSecret);
        if (decoded) {
            return decoded;
        } else {
            return false;
        }
    }
}

module.exports = userCtrl;