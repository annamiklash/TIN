function Student(firstName, lastName, id, gradesArr) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.gradesArr = gradesArr;

    Object.defineProperty(this, 'avgGrade', {
        get: function () {
            let gradesSum = 0;

            for (let i = 0; i < gradesArr.length; i++) {
                gradesSum += gradesArr[i];
            }
            return gradesSum / gradesArr.length;
        }
    });

    Object.defineProperty(this, 'fullName', {
        get: function () {
            return firstName + ' ' + lastName;
        },
        set: function (name) {
            let words = name.toString().split(' ');
            this.firstName = words[0] || '';
            this.lastName = words[1] || '';
        }
    })
}


function printStudent(student) {
    console.log(student.firstName + " " + student.lastName + " " + student.avgGrade);
}


function run() {
    var student = new Student("Hanna", "Miklash", "s18458", [5, 4.5, 4, 5, 4, 4.5]);
    printStudent(student);
    console.log("full name: " + student.fullName);
    student.fullName = "Heelo hello";
    console.log("first name: " + student.firstName);
    console.log("last name: " + student.lastName);

}
