function run() {
    let x = 5;
    console.log("(recursive) Factorial of " + x + " = " + calculateFactorialRecursively(5));
    console.log("(iterative) Factorial of " + x + " = " + calculateFactorialIteratively(5));
}

function calculateFactorialRecursively(x) {
    if (x === 0) {
        return 1;
    }
    return x * calculateFactorialRecursively(x - 1);
}

function calculateFactorialIteratively(num) {
    var result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}



