function run() {
    console.log(findSecondLowestAndSecondLargest([4]));
    console.log(findSecondLowestAndSecondLargest([4, 5]));
    console.log(findSecondLowestAndSecondLargest([4, 5, 6]));
    console.log(findSecondLowestAndSecondLargest([4, 3, 8, 12, 15]));
}

function findSecondLowestAndSecondLargest(arr) {
    if (arr.length <= 2) {
        console.log("Invalid Input");
        return;
    }
    var max1st = arr[0];
    var max2nd = 0;

    var min1st = Infinity;
    var min2nd = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1st) {
            max2nd = max1st;
            max1st = arr[i];
        } else if (arr[i] > max2nd && arr[i] !== max1st) {
            max2nd = arr[i];
        }
        if (arr[i] < min1st) {
            min2nd = min1st;
            min1st = arr[i];
        } else if (arr[i] < min2nd && arr[i] !== min1st) {
            min2nd = arr[i];
        }
    }
    return [max2nd, min2nd];

}

