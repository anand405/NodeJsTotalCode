//Creating Schema....

var mongoose = require('mongoose');
var bcrypt = require("bcryptjs");

var user = {
    email: { type: String },
    username: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    gender: { type: String, enum: ['Male', 'Female', "Donot Disclose"] },
    createdDate: { type: Date, default: Date.now }
};

var userSchema = mongoose.Schema(user);
// userSchema.pre('save', (next) => {
//     var doc = this;
//     console.log(doc.password);
//     bcrypt.genSalt(10, (err, salt) => {
//         if (err) {
//             return next(err);
//         }
//         bcrypt.hash(doc.password, salt, (err, hash) => {
//             if (err) {
//                 return next(err);
//             }
//             doc.password = hash;
//             next();
//         });
//     });

// });
mongoose.model("profile", userSchema);