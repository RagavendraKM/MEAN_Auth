const redis = require('redis');
const uuid = require('uuid/v4');
const session = require('express-session');
const redisStore = require('connect-redis')(session);

var client = redis.createClient();

module.exports = {client,session,uuid,redisStore};