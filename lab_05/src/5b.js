function Student(firstName, lastName, id, gradesArr) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.gradesArr = gradesArr;
}


function printStudent(stud) {
    var arrLength = stud.gradesArr.length;
    var gradesSum = 0;

    for (let i = 0; i < arrLength; i++) {
        gradesSum += stud.gradesArr[i];
    }
    var avgGrade = gradesSum / arrLength;
    console.log(stud.firstName + " " + stud.lastName + " " + avgGrade);
}

function run(){
    var student = new Student("Hanna", "Miklash", "s18458", [5,4.5,4,5,4,4.5]);
    printStudent(student);
}
