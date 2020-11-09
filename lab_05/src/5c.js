var stud = {
    id: "",
    firstName: "",
    lastName: ""
};

stud.prototype = {courses: ["AM", "PRI", "APBD", "TIN"]};

let student1 = createStudent("Jonh", "Black", '123');
let student2 = createStudent("Alice", "White", '321');
let student3 = createStudent("Kyle", "Brown", '231');

console.log(student1);
console.log(student2);
console.log(student3);


function createStudent(firstName, lastName, id) {
    let newStudent = Object.create(stud);
    newStudent.firstName = firstName;
    newStudent.lastName = lastName;
    newStudent.id = id;
    // newStudent.courses = stud.prototype.courses;

    return newStudent;
}
