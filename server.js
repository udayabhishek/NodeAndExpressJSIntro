const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
    var weight = Number(req.body.weight); //kg
    var height = Number(req.body.height); //cm
    var result = (weight/(height*height)) * 10000;
    res.send("Your BMI is: " + result.toFixed(2))//toFixed to get upto 2 decimal value
});

app.listen(3000, function() {
    console.log("Your server is running at 3000");
});