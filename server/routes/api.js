const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');
const { User, Events,SpecialEvents } = require('../models/user');
const {client} = require('../models/redis');
const db = "mongodb+srv://admin:admin@cluster0-pvipx.mongodb.net/eventsHub?retryWrites=true"

const { SpecialImgUpload,ImgUpload } = require('../models/imgUpload');

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

var jwt_secret = 'secretKey';
var jwt_expiration = 600 * 10 * 10;

client.on("connect", function() {
  console.log("Redis Connected");
});

router.post('/register', async (req, res) => {

  console.log(req.session);
  
  let user = await User.findOne({ email : req.body.email });
  if(user) {
    console.log("User already exists");
    return res.status(400).send("User exists");    
  } else {
    let userData = req.body;
    req.session.email = req.body.email;
    console.log(req.session);
    // console.log(userData);
    regUser = new User(userData);
    console.log(regUser);
    await regUser.save((error, rUser) => {
      if(error){ 
        console.log(error);
      } else {
        let payload = { subject: rUser._id }
        let email = rUser.email;
        let token = jwt.sign(payload, jwt_secret, {
           expiresIn : jwt_expiration 
        });
        // res.cookie("access_token", token, {
        //   httpOnly : true
        // });
        // res.cookie("refresh_token", refreh_token, {
        //   httpOnly : true
        // })
        // client.set(rUser._id, JSON.stringify({
        //   refreh_token : refreh_token,
        //   expires : refreh_token_maxage
        // }), redis.print);
        res.status(200).send({ token, email });
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
      let email = user.email
      if(!req.session.email){
      req.session.email = req.body.email;
      console.log(req.session);
      }  
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({ token , email });
    }
  })
});

router.get('/events', (req, res) => {
  Events.find({ createdBy : req.session.email },(err, event) => {
    //console.log(req);
    if (err) { console.log(err) }
    res.json(event);
    return event;
  });
});

router.get('/special', verifyToken, (req, res) => {
  if(!req.session.email){
    console.log("Go to login");
     res.redirect('/login');
  }  else {
  SpecialEvents.find({ createdBy : req.session.email },(err, event) => {
    if (err) { console.log(err) }
    res.json(event);
    return event;
    });
  }
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
        var event = new Events({
            eventName : req.body.ename,
            eventDate : req.body.edate,
            eventDescription : req.body.edesc,
            createdBy : req.body.createdBy,
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
  SpecialImgUpload(req,res,function(err){
    //console.log(req);
    if(err){
        console.log(err);
        return;
    }
    if(!req.file){
        console.log("File not found");
        return;
    } else {
        var event = new SpecialEvents({
            eventName : req.body.ename,
            eventDate : req.body.edate,
            eventDescription : req.body.edesc,
            createdBy : req.body.createdBy,
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

router.get('/special/:id', (req, res) => {
  SpecialEvents.findById(req.params.id, (err,ids)=> {
    if(err) { console.log(err)}
    res.json(ids);
  })
});

router.delete('/deleteEvent/:id', (req, res) => {
  Events.findOneAndDelete({_id :req.params.id} , (err,delId) => {
    console.log(req.params.id);
    if(err) { 
      console.log(err);
     } else {
        res.json(delId);
        fs.unlink(delId.eventGallery , (err) => {
          if(err) console.log(err);
          else console.log("File deleted in Local storage");
        });
       console.log("Deleted", delId);
      }
  });
});

router.delete('/deleteSpecial/:id', (req, res) => {
  SpecialEvents.findOneAndDelete({_id :req.params.id} , (err,delId) => {
    console.log(req.params.id);
    if(err) { 
      console.log(err);
     } else {
        res.json(delId);
        fs.unlink(delId.eventGallery , (err) => {
          if(err) console.log(err);
          else console.log("File deleted in Local storage");
        });
       console.log("Deleted special" , delId);
      }
  });
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