const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send("Witaj");
});

app.listen(8080);