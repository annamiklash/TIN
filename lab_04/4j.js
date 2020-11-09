function run() {
    console.log(binarySearch([4, 6, 3, 1, 6, 7, 1, 16, 7, 12], 7))
}

function binarySearch(arr, num) {
    arr = arr.sort();

    var start = 0;
    var end = arr.length - 1;
    var middle;

    while (start <= end) {
        middle = Math.floor((start + end) / 2);

        if (arr[middle] === num) {
            return middle;
        } else if (arr[middle] < num) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return "Not found";
}
