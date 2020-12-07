function handleAddition(operand1, operand2) {
    let result = operand1 + operand2;
    console.log(result);
    return operand1 + " + " + operand2 + " = " + result;

}

function handleSubtraction(operand1, operand2) {
    let result = operand1 - operand2;
    console.log(result);
    return operand1 + " - " + operand2 + " = " + result;
}

function handleMultiplication(operand1, operand2) {
    let result = operand1 * operand2;
    console.log(result);
    return operand1 + " * " + operand2 + " = " + result;
}

function handleDivision(operand1, operand2) {
    let result = operand1 / operand2;
    console.log(result);
    return operand1 + " / " + operand2 + " = " + result;
}


module.exports = {handleAddition, handleSubtraction, handleMultiplication, handleDivision};
