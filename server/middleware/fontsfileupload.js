const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, "./uploads/fontfiles/");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    },
  });

  var upload = multer({
    storage: storage ,
    limits: {
      fileSize: 1024 * 1024 * 10
    },
    fileFilter: function(req, file, callback){
      if(
        file.mimetype == "image/png" || file.mimetype == "application/x-zip-compressed"
        ) {
          callback(null, true)
          }
          else {
              console.log("Only JPG, PNG and Zip files supported")
              callback(null, false)
          }
    }});

var uploadMultiple = upload.fields([{ name: 'fontimage'}, { name: 'fontfilezip'}])

module.exports = uploadMultiple