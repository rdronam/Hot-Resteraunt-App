const mysql = require("mysql");
const express = require("express");

var app = express();

//initiate connection to database

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "HotRestaurant_DB"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected as ID: " + connection.threadId);
    runTableQuery();
});

function runTableQuery() {
    connection.query("SELECT * FROM reservations", function(err, res) {
        if(err) throw err;
        // console.log(res);
        var newArr = [];
        for (var i = 0; i < res.length; i++){
            newArr.push(res[i].name);
        }
        console.log(newArr);
    });
}