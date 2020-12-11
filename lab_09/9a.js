const express = require('express');
const app = express();
app.use(express.json());
const validator = require('is-my-json-valid');
const path = require('path');
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));

const validate = validator({
    required: true,
    type: 'object',
    properties: {
        operand1: {
            required: true,
            type: 'number',

        },
        operand2: {
            required: true,
            type: 'number',

        },
        operation: {
            required: true,
            type: 'string'
        }
    }
})


function processRequest(body) {
    let operand1 = body.operand1;
    let operand2 = body.operand2;
    let operationType = body.operation;
    let operationResult;
    switch (operationType) {
        case 'add':
            operationResult = operand1 + operand2;
            break;
        case 'sub':
            operationResult = operand1 - operand2;
            break;
        case 'mul':
            operationResult = operand1 * operand2;
            break;
        case 'div':
            operationResult = operand1 / operand2;
            break
        default:
            operationResult = "Incorrect operation. Can be either sub, add, mul or div";
            break;
    }
    return {operand1: operand1, operand2: operand2, result: operationResult};
}

app.post('/9a', function (request, response) {
    console.log(request.body);
    validate(request.body);
    if (validate.errors !== null) {
        console.log(validate.errors);
        response.status(400).json(validate.errors);
    } else {
        let result = processRequest(request.body);
        response.status(200).json(result);
        console.log(result);
        response.end();
    }
});

app.listen(3000);
