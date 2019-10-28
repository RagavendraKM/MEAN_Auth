const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const { User, Events,SpecialEvents } = require('../models/user');
const db = "mongodb+srv://admin:admin@cluster0-pvipx.mongodb.net/eventsHub?retryWrites=true"

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

mongoose.connect(db, err => {
  if (err) {
    console.log("Connot connect to Database " + err)
  }
  else {
    console.log("Database Connected")
  }
})

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

router.post('/register', async (req, res) => {

  let user = await User.findOne({ email : req.body.email });
  if(user) {
    console.log("User already exists");
    return res.status(400).send("User exists");    
  } else {
    let userData = req.body;
    console.log(userData);
    regUser = new User(userData);
    console.log(regUser);
    await regUser.save((error, rUser) => {
      if(error){ 
        console.log(error);
      } else {
        let payload = { subject: rUser._id }
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({ token });
      }
    });
  }
});

router.post('/login', (req, res) => {
  let userData = req.body;
  let query = { email: userData.email }
  User.findOne(query, (error, user) => {
    if (error) {
      console.log(error)
    }
    else if (!user) {
      res.status(401).send("Invalid username");
    }
    else if (user.password != userData.password) {
      res.status(401).send("Invalid Password");
    }
    else {
      let payload = { subject: user._id }
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({ token });
    }
  })
});

router.get('/events', (req, res) => {
  Events.find((err, event) => {
    if (err) { console.log(err) }
    res.json(event);
    return event;
  });
});

router.get('/special', verifyToken, (req, res) => {
  SpecialEvents.find((err, event) => {
    if (err) { console.log(err) }
    res.json(event);
    return event;
  });
})


router.get('/events/:id', (req, res) => {
  Events.findById(req.params.id, (err,ids)=> {
    if(err) { console.log(err)}
    res.json(ids);
  })
});

router.post('/addEvent', (req, res) => {
  ImgUpload(req,res,function(err){
    //console.log(req);
    if(err){
        console.log(err);
        return;
    }
    if(!req.file){
        console.log("File not found");
        return;
    } else {
        //console.log(req);
        //console.log(req.file);
        var event = new Events({
            eventName : req.body.ename,
            eventDate : req.body.edate,
            eventDescription : req.body.edesc,
            eventGallery : req.file.path
        });
        event.save()
        .then( result => {
            console.log(result);
            res.status(200).json({err_code:0,err_desc:null,data:result});
        });

    }
}); 
});

router.post('/addSpecial', (req, res) => {
  var event = new SpecialEvents({
    eventName: req.body.ename,
    eventDescription: req.body.edesc,
    eventDate: req.body.edate,
    eventGallery: req.file.path
  });
  event.save()
    .then(result => {
      // console.log(event);
      console.log(result);
      res.status(200).json({ err_code: 0, err_desc: null, data: result });
    });
});

router.get('/special/:id', (req, res) => {
  SpecialEvents.findById(req.params.id, (err,ids)=> {
    if(err) { console.log(err)}
    res.json(ids);
  })
});

router.get('/', (req, res) => {
  res.send("From API route");
});

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    res.status(401).send("Unauthorized Request");
  }
  let token = req.headers.authorization.split(' ')[1]
  if (token === null) {
    res.status(401).send("Unauthorized Request");
  }
  let payload = jwt.verify(token, 'secretKey')
  if (payload === null) {
    res.status(401).send("Unauthorized Request");
  }
  req.userId = payload.subject
  next()
}


module.exports = router