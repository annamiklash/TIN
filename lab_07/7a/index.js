const http = require('http');
const url = require('url');


// Create a server object
http.createServer(function (req, res) {

    // http header
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let format = "Provide the URL link in the following format: http://localhost:3000/?&operand1=YOUR_INPUT&operator=YOUR_INPUT&operand2=YOUR_INPUT\n"
    res.write(format)
    let operationsHandler = require('./operationsHandler')
    let queryData = url.parse(req.url, true).query;

    let mathOperator = queryData.operator;
    let operand1 = parseInt(queryData.operand1);
    let operand2 = parseInt(queryData.operand2);


    if (!operand1 || !operand2 || !mathOperator) {
        res.write("\nProvided URL was incorrect");
        res.end()
    } else {
        switch (mathOperator) {
            case "add":
                res.end("\n" + operationsHandler.handleAddition(operand1, operand2));
                break;
            case "sub":
                res.end("\n" + operationsHandler.handleSubtraction( operand1, operand2));
                break;
            case "div":
                res.end("\n" + operationsHandler.handleDivision(operand1, operand2));
                break;
            case "mul":
                res.end("\n" + operationsHandler.handleMultiplication(operand1, operand2))
                break;
            default:
                res.end("\nIncorrect operator. Only add, sub, mul, div are allowed")
        }
    }


}).listen(3000, function () {

    // The server object listens on port 3000
    console.log("server start at port 3000");
});
