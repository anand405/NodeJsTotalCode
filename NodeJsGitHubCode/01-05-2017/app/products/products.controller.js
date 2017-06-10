var productsCtrl = {};

productsCtrl.get = function(req, res) {
    res.render("products", { title: "Products", products: getListOfProducts() });
};

function getListOfProducts() {
    return [{
            "index": 0,
            "price": "$3,356.07",
            "picture": "http://placehold.it/32x32",
            "productName": "iPad"
        },
        {
            "index": 1,
            "price": "$2,236.56",
            "picture": "http://placehold.it/32x32",
            "productName": "iPad"
        },
        {
            "index": 2,
            "price": "$2,262.78",
            "picture": "http://placehold.it/32x32",
            "productName": "iPad"
        },
        {
            "index": 3,
            "price": "$1,823.58",
            "picture": "http://placehold.it/32x32",
            "productName": "iPad"
        },
        {
            "index": 4,
            "price": "$2,799.50",
            "picture": "http://placehold.it/32x32",
            "productName": "iPhone"
        },
        {
            "index": 5,
            "price": "$1,016.53",
            "picture": "http://placehold.it/32x32",
            "productName": "OnePlus3T"
        },
        {
            "index": 6,
            "price": "$2,393.76",
            "picture": "http://placehold.it/32x32",
            "productName": "OnePlus3T"
        },
        {
            "index": 7,
            "price": "$2,749.59",
            "picture": "http://placehold.it/32x32",
            "productName": "iPhone"
        },
        {
            "index": 8,
            "price": "$3,644.53",
            "picture": "http://placehold.it/32x32",
            "productName": "Note8"
        },
        {
            "index": 9,
            "price": "$1,792.70",
            "picture": "http://placehold.it/32x32",
            "productName": "OnePlus3T"
        },
        {
            "index": 10,
            "price": "$1,986.95",
            "picture": "http://placehold.it/32x32",
            "productName": "Note8"
        },
        {
            "index": 11,
            "price": "$2,457.72",
            "picture": "http://placehold.it/32x32",
            "productName": "iPhone"
        },
        {
            "index": 12,
            "price": "$1,203.27",
            "picture": "http://placehold.it/32x32",
            "productName": "iPad"
        },
        {
            "index": 13,
            "price": "$2,146.42",
            "picture": "http://placehold.it/32x32",
            "productName": "Note8"
        },
        {
            "index": 14,
            "price": "$3,973.09",
            "picture": "http://placehold.it/32x32",
            "productName": "OnePlus3T"
        },
        {
            "index": 15,
            "price": "$2,582.45",
            "picture": "http://placehold.it/32x32",
            "productName": "iPhone"
        },
        {
            "index": 16,
            "price": "$3,926.20",
            "picture": "http://placehold.it/32x32",
            "productName": "OnePlus3T"
        },
        {
            "index": 17,
            "price": "$1,074.84",
            "picture": "http://placehold.it/32x32",
            "productName": "iPad"
        },
        {
            "index": 18,
            "price": "$2,874.22",
            "picture": "http://placehold.it/32x32",
            "productName": "iPhone"
        }
    ];
}
module.exports = productsCtrl;