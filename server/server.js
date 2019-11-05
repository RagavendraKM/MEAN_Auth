const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');
const {client,session,uuid,redisStore} = require('./models/redis');
const PORT = 3000

const api= require('./routes/api')
const app = express()

app.use(express.static(path.join(__dirname, '../ngApp/dist/ngApp')));

app.use(cors());

// app.use(bodyParser.jsonurlencoded());
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    genid : (req) => {
        return uuid();
    },
    store : new redisStore({port : 6379, host : 'localhost', client : client}),
    name : '_CookieName',
    secret : 'secretKey',
    resave : false,
    cookie : {secure : false, maxAge : 60000},
    saveUninitialized : true
}));

app.use('/api', api)

app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../ngApp/dist/ngApp', 'index.html'))
   // res.send("Hello from server");
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server started on port ` + PORT);
});

module.exports = app;