const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: String,
    lname: String,
    email: { type: String, required: true, unique: true },
    password: String
})

var EventSchema = mongoose.Schema({
    eventName : String,
    eventDate : String,
    eventDescription : String,
    eventGallery : String,
    createdBy : String
});

var SpecialEventSchema = mongoose.Schema({
    eventName : String,
    eventDate : String,
    eventDescription : String,
    eventGallery : String,
    createdBy : String
});

var User = mongoose.model('user', userSchema, 'users')
var Events = mongoose.model('event', EventSchema, 'events')
var SpecialEvents = mongoose.model('special', SpecialEventSchema, 'special')
module.exports = { User, Events,SpecialEvents }
