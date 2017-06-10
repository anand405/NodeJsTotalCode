var multer = require("multer");

var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');
    },
    filename: function(req, file, callback) {

        callback(null, file.originalname + '-' + Date.now());
    }
});
var upload = multer({ storage: storage }).single('userPhoto');
var fileUploadCtrl = {};
fileUploadCtrl.upload = function(req, res) {

    upload(req, res, function(err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
};
module.exports = fileUploadCtrl;