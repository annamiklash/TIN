function run() {
    convertMoneyToCoins(46);
}

function convertMoneyToCoins(input) {
    if (typeof input === undefined) {
        console.log("No input provided");
        return;
    }

    var result = new Map();
    var change = input;
    var values = [25, 10, 2, 1];
    for (let i = 0; i < values.length; i++) {
        result.set(values[i], 0);
    }

    while (change >= values[0] && (change - values[0] >= 0)) {
        let value = result.get(values[0]);
        let newValue = value + 1;
        result.set(values[0], newValue);
        change = change - values[0];
    }

    while (change >= values[1] && (change - values[1] >= 0)) {
        let value = result.get(values[1]);
        let newValue = value + 1;
        result.set(values[1], newValue);
        change = change - values[1];

    }

    while (change >= values[2] && (change - values[2] >= 0)) {
        let value = result.get(values[2]);
        let newValue = value + 1;
        result.set(values[2], newValue);
        change = change - values[2];
    }

    while (change >= values[3] && (change - values[3] >= 0)) {
        let value = result.get(values[3]);
        let newValue = value + 1;
        result.set(values[3], newValue);
        change = change - values[3];

    }



}
