class Person {
    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;

    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(name) {
        let words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }

}

class Student extends Person {
    constructor(firstName, lastName, id, gradesArr) {
        super(firstName, lastName);
        this.id = id;
        this.gradesArr = gradesArr;
    }

    get avgGrade() {
        return this.calcAvgGrade();
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
    var student = new Student("Hanna", "Miklash", "s18458", [5, 4.5, 4, 5, 4, 4.5]);
    student.print();
    console.log("full name: " + student.fullName);
    student.fullName = "newFirst newLast";
    console.log("first name: " + student.firstName);
    console.log("last name: " + student.lastName);
}


