const express = require("express");
const bodyParser = require("body-parser");

const app =express();

app.get("/", function(req, res){
 var today = new Date();
 if (today.getDay() === 6 || todat.getDay()===0){
    res.sendFile(__dirname + "/");
 }
 else{
    res.send("<h1>Boo! i have to work</h1>");
 }

    
});


app.listen(3000, function(){
    console.log("Server sterting on port 3000");
});