var express = require("express");
var app = express();
var port = 3000;
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-base");

var nameSchema = new mongoose.Schema({
    firstName: String,
    lastNameName: String
   });

   var User = mongoose.model("User", nameSchema);

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
   });
 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
 myData.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});

//http://localhost:3000