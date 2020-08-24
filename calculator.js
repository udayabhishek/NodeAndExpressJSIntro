//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", function (request, response) {
//     response.send("HELLO CAL");
// });

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("Result: " +result);  
    
});

app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
    var weight = Number(req.body.weight); //kg
    var height = Number(req.body.height); //cm
    var result = (weight / (height * height)) * 10000;
    res.send("Your BMI is: " + result.toFixed(2)) //toFixed to get upto 2 decimal value
});

app.listen(3000, function() {
    console.log("server is running at 3000");
});


