var express = require('express');
var app = express();
var pi = require('./pi');
var calculate = require('./calc');
var sum = require('./sum');
var volume = require('./volume');
var area = require('./area');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/math/pi', pi);
app.get('/math/calculate', calculate);
app.post('/math/sum', sum);
app.all('/math/volume/:length/:width/:height', volume);
app.post('/math/area', area);

app.listen(8080);
