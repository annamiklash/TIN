function run() {
    console.log(alphabeticalOrder("webmaster"));
}

function alphabeticalOrder(str){
    return str.split('').sort().join('');
}


