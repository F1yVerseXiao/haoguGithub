var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Content-Type', 'application/json');
    next();
});


app.use('/api/student', require('./routes/students'));


app.listen(3008, function() {
    console.log('服务已经开启。后台接口地址： http://localhost:3008');
});