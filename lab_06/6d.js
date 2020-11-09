function addNewCatInfo() {
    let breed = document.getElementById('cat_breed').value;
    let color = document.getElementById('cat_color').value;
    let eyeColor = document.getElementById('cat_eye_color').value;
    let age = document.getElementById('age').value;
    let catName = document.getElementById('cat_name').value;

    let table = document.getElementById("cats_table");

    let row = table.insertRow(1);

    let cell_1 = row.insertCell(0);
    let cell_2 = row.insertCell(1);
    let cell_3 = row.insertCell(2);
    let cell_4 = row.insertCell(3);
    let cell_5 = row.insertCell(4);

    cell_1.innerHTML = breed;
    cell_2.innerHTML = color;
    cell_3.innerHTML = eyeColor;
    cell_4.innerHTML = age;
    cell_5.innerHTML = catName;


}
