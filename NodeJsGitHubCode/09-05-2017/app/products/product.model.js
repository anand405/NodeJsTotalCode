//step1.
var mongoose = require("mongoose");
//step2
//create schema definition.

var productSchema = mongoose.Schema({
    name: { type: String },
    Description: { type: String },
    imageUrl: { type: String },
    Price: { type: Number },
    Model: { type: String },
    picture: { type: String },
    index: { type: Number }
});

//attach schema to a document.
mongoose.model("product", productSchema);