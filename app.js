const express = require("express");
const bodyParser = require("body-parser");

const app =express();
app.set('view engine', 'ejs');

app.get("/", function(req, res){
 var today = new Date();
 const options = { weekday: 'long', 
 year: 'numeric',
  month: 'long', 
  day: 'numeric' }

//  var currentDay =  today.getDay();
 var day = today.toLocaleDateString("en-US", options);

 

 res.render('list', {kindOfDay: day });

    
});


app.listen(3000, function(){
    console.log("Server sterting on port 3000");
});