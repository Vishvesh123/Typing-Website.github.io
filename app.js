
const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");



const app=express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/login",function(req,res){
  res.sendFile(__dirname+"/login.html");
});

app.get("/sign%20up",function(req,res){
  res.sendFile(__dirname+"/signUp.html");
});







app.listen(process.env.PORT || 3600,function(){
  console.log("Server started at port 3600...");
});
