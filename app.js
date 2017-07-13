var express = require('express');
var app = express();
var pi = require('./pi')
var calculate = require('./calc')
var sum = require('./sum')
var volume = require('./volume')
var bodyParser = require('body-parser')

app.get('/math/pi', pi);
app.get('/math/calculate', calculate);
app.post('/math/sum', sum);
app.all('/math/volume/:length/:width/:height', volume);

app.listen(8080);
