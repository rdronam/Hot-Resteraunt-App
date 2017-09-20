var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = 8080;

// routing table

app.get("/", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/reservation", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"reservation.html"));
});

app.get("/tables", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"tables.html"));
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});