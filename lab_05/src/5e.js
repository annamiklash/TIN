class Student {
    constructor(firstName, lastName, id, gradesArr) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.gradesArr = gradesArr;
    }

    get avgGrade() {
        return this.calcAvgGrade();
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(name) {
        let words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }

    calcAvgGrade() {
        let gradesSum = 0;
        let length = this.gradesArr.length;

        for (let i = 0; i < length; i++) {
            gradesSum += this.gradesArr[i];
        }
        return gradesSum / length;
    }

    print() {
        console.log(this.firstName + " " + this.lastName + " " + this.avgGrade);
    }


}

function run() {
    Object.setPrototypeOf(Student.prototype, Person);
    var student = new Student("Hanna", "Miklash", "s18458", [5, 4.5, 4, 5, 4, 4.5]);
    student.print();
    console.log("full name: " + student.fullName);
    student.fullName = "newFirst newLast";
    console.log("first name: " + student.firstName);
    console.log("last name: " + student.lastName);
}


