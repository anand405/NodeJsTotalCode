var productsCtrl = {};
var productModel = require("mongoose").model("product");
productsCtrl.get = function(req, res) {
    // calling the products model to fetch the records
    productModel.find({}, { _id: 0, picture: 0 }).
    then(function(data) {
            res.render("products", { products: data });
        })
        .catch(function(error) {
            res.json({ "Error": "Error Occured" })
        })

};

productsCtrl.getByPage = function(req, res) {
    // calling the products model to fetch the records
    var pageNumber = req.params["pageNumber"];
    productModel.find({}, { _id: 0, picture: 0 }, { skip: (pageNumber - 1) * 10, limit: 10 }).
    then(function(data) {
            res.render("products", { products: data });
        })
        .catch(function(error) {
            res.json({ "Error": "Error Occured" })
        })

};

productsCtrl.apiGet = function(req, res) {
    productModel.find({}, { _id: 0, picture: 0 }).
    then(function(data) {
            res.json(data);
        })
        .catch(function(error) {
            res.json({ "Error": "Error Occured" })
        })

}

productsCtrl.search = function(req, res) {
    var criteria = req.body;
    console.log(criteria);
    //  {
    //     $or: [
    //         { Model: "OnePlus3T" },
    //         {
    //             Price: { $gte: 630000, $lte: 900000 }

    //         }
    //     ]
    // }


    var ModelCriteria = { Model: "" };
    var priceCriteria = {
        Price: {
            "$gte": 0,
            "$lte": 0
        }
    };
    var searchQuery;
    if (criteria.Model && (criteria.Min || criteria.Max)) {
        ModelCriteria.Model = criteria.Model;
        priceCriteria.Price.$gte = parseInt(criteria.Min);
        priceCriteria.Price.$lte = parseInt(criteria.Max);
        searchQuery = {
            "$or": []
        };
        searchQuery["$or"].push(ModelCriteria);
        searchQuery["$or"].push(priceCriteria);

    }
    console.log(searchQuery);
    //res.json(searchQuery);

    // var searchQuery = {
    //     "$or": []
    // };
    // if (criteria.Model != "") {

    //     //searchQuery["$or"].push({ "Model": criteria.Model });
    // }
    // if (criteria.Min != "") {
    //     searchQuery["$or"].push({
    //         "Price": {
    //             "$gte": criteria.Min
    //         }
    //     });
    // }
    // if ()
    var query = productModel.find(searchQuery);
    query.then(function(data) {
            res.render("products", { products: data });
        })
        .catch(function(err) {
            console.log(err);
            res.json("Somethign went wrong");
        })
};

module.exports = productsCtrl;