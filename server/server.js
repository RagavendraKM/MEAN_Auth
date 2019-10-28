const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const PORT = 3000

const api= require('./routes/api')
const app = express()

app.use(cors());

// app.use(bodyParser.jsonurlencoded());
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api)

app.get('/', function(req, res) {
    res.send("Hello from server");
});

app.listen(PORT, () => {
    console.log(`Server started on port ` + PORT);
});