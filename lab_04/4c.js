function run() {
    console.log(isPolindrome("is polindrom"));
    console.log(isPolindrome("Abba"));
}

function isPolindrome(str) {
    let reversed = str.toLowerCase().split("").reverse().join("")
    return str.toLowerCase() === reversed
}


