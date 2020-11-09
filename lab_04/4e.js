function run() {

    console.log(findLongestWord("I'm looking for a longest word"));
}

function findLongestWord(str) {
    var strArr = str.split(' ');
    var longestWord = strArr[0];

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > longestWord.length) {
            longestWord = strArr[i];
        }
    }

    return longestWord;
}
