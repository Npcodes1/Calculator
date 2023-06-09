// js hint esversion:6

const express = require ("express"); 

const bodyParser = require ("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);

    let result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

// For BMI Calculator

app.get("/bmiCalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res){
       
    let weight = parseFloat(req.body.wt);
    let height = parseFloat(req.body.ht);
    let bmi = Math.round(weight / Math.pow(height,2));
    
    res.send("Your BMI is " + bmi);
    
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});