const express = require("express");
const bodyParser = require("body-parser");
var items = ["Buy food", "Cook food","Eat food"];
const app =express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", function(req, res){
 var today = new Date();
 const options = { weekday: 'long', 
 year: 'numeric',
  month: 'long', 
  day: 'numeric' }

 var day = today.toLocaleDateString("en-US", options);
 res.render('list', {kindOfDay: day, newListItems: items});   
});

app.post("/", function(req, res){
var item = req.body.newItem;
items.push(item);
res.redirect("/"); 
});
app.listen(3000, function(){
    console.log("Server sterting on port 3000");
});