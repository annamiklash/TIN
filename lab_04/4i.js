function run() {
    convertMoneyToCoins(46);
}

function convertMoneyToCoins(input) {
    if (typeof input === undefined) {
        console.log("No input provided");
        return;
    }

    let values = [25, 10, 2, 1];
    let resultMap = new Map();
    let sum = input;

    for (let i = 0; i < values.length; i++) {
        let currentCoinValue = values[i];
        let numberOfCoins = Math.floor(sum / currentCoinValue);
        resultMap.set(currentCoinValue, numberOfCoins);
        sum = sum - numberOfCoins * currentCoinValue;
    }

    let resultStr = "";
    for (let [coinValue, numberOfCoins] of resultMap) {
        for (let i = 0; i < numberOfCoins; i++) {
            resultStr += coinValue + " ";
        }
    }
    console.log(resultStr);
}
