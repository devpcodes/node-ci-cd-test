var express = require('express');
 
var app = express();

app.get('/', function (req, res) {
 res.send('hello world CI/CD-');
});

const server = app.listen(process.env.PORT || 7000,()=>{
    console.log('connect');
});

 
module.exports = {app, server};