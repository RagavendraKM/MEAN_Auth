const multer = require('multer');

var ImgStorage = multer.diskStorage({
  destination : function(req,file,cb) {
      cb(null, '../ngApp/src/assets')
  },
  filename : function(req,file,cb) {
      var datetime = Date().split(" ")[4].split(":").join("");
      cb(null,file.originalname + '-' + datetime + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
  }
});

var fileFilter = function(req,file,cb){
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
      cb(null,true);
  } else {
      cb(null,false);
  }
}

// Image Upload Multer Storage
var ImgUpload = multer({
   storage : ImgStorage,
   dest : '../uploads',
   limits : {
       fileSize : 1024 * 1024 * 5
   },
   fileFilter : fileFilter 
}).single('imgFile');

var SpecialImgStorage = multer.diskStorage({
  destination : function(req,file,cb) {
      cb(null, '../ngApp/src/assets')
  },
  filename : function(req,file,cb) {
      var datetime = Date().split(" ")[4].split(":").join("");
      cb(null,file.originalname + '-' + datetime + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
  }
});

var SpecialImgUpload = multer({
  storage : SpecialImgStorage,
  dest : '../uploads',
  limits : {
      fileSize : 1024 * 1024 * 5
  },
  fileFilter : fileFilter 
}).single('specialImgFile');

module.exports = { SpecialImgUpload,ImgUpload }