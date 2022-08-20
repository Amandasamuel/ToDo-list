const express = require("express");
const bodyParser = require("body-parser");
let items = ["Buy food", "Cook food","Eat food"];
const app =express();
let workItems= [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(req, res){
 let today = new Date();
 const options = { weekday: 'long', 
 year: 'numeric',
  month: 'long', 
  day: 'numeric' }

 let day = today.toLocaleDateString("en-US", options);
 res.render('list', {listTitle: day, newListItems: items});   
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    if(req.body.list ==="work"){
        workItems.push(item);
        res.redirect("/work"); 
    }else{
        items.push(item);
        res.redirect("/"); 
    }


});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "work",  newListItems:workItems});
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")

});

app.listen(3000, function(){
    console.log("Server sterting on port 3000");
});