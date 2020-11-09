var student = {
    firstName: "Hanna",
    lastName: "Miklash",
    school: "PJATK",
    birthday: new Date(1994, 5, 22),
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    age: function () {
        {
            var today = new Date();
            var age = today.getFullYear() - this.birthday.getFullYear();
            var m = today.getMonth() - this.birthday.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < this.birthday.getDate())) {
                age--;
            }
            return age;
        }
    }};


function run() {
    console.log(student.fullName());
    console.log(student.age());
    printStudent(student);
}

function printStudent(stud) {
    for (let property in stud) {
        if (stud.hasOwnProperty(property) && typeof stud[property] !== "function") {
            console.log(property + ": " + stud[property] +"; ");
        }
    }
}
