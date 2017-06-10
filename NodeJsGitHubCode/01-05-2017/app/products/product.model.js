//step1.
var mongoose = require("mongoose");
//step2
//create schema definition.

var productSchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    price: { type: Number }
});

//attach schema to a document.
mongoose.model("product", productSchema);