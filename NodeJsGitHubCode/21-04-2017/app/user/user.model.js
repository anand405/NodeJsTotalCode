//Creating Schema....

var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number }
});
mongoose.model("userdetail", userSchema);