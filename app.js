var express = require('express');
var app = express();
var pi = require('./pi')
var calculate = require('./calc')
var sum = require('./sum')
var bodyParser = require('body-parser')


// app.use(express.json());       // to support JSON-encoded bodies
// app.use(express.urlencoded());

app.get('/math/pi', pi);
app.get('/math/calculate', calculate);
app.post('/math/sum', sum);

app.listen(8080);
