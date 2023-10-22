const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send("Fargate");
});

app.listen(80);