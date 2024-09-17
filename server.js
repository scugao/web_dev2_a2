var bodyparser = require('body-parser');

var express = require('express');
var app = express();
var concertAPI = require("./controllerAPI/api-controller");

app.use("/api/concerts", concertAPI);
app.listen(3060);
console.log("Server up and running on port 3060");


