const express = require("express");
const myParser = require("body-parser");
const path = require('path');
const app = express();
app.use(myParser.json());
app.listen(3000);
app.use(express.static("public"));
app.set("views", path.join(__dirname, "./views/"));


app.get('/9b', function (req, res) {
    res.sendFile('form.html', {root: __dirname + "/views"});


});

app.post('/9b', function (request, response) {
    let result = calculate(request.body);
    response.status(200).json(result)
})

function calculate(obj) {
    let operand1 = obj.operand1;
    let operand2 = obj.operand2;
    let operationType = obj.operation;
    let operationResult;
    switch (operationType) {
        case 'add':
            operationResult = parseInt(operand1) + parseInt(operand2);
            return operationResult;
        case 'sub':
            operationResult = parseInt(operand1) - parseInt(operand2);
            return operationResult;
        case 'mul':
            operationResult = parseInt(operand1) * parseInt(operand2);
            return operationResult;
        case 'div':
            operationResult = parseInt(operand1) / parseInt(operand2);
            return operationResult;
        default:
            operationResult = "Incorrect operation. Can be either sub, add, mul or div";
            return operationResult;
    }
}
