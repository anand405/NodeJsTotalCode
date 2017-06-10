//Creating Schema....

var mongoose = require('mongoose');

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

mongoose.model("profile", userSchema);