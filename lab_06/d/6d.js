function addNewCatInfo() {
    let breed = document.getElementById('cat_breed');
    let color = document.getElementById('cat_color');
    let eyeColor = document.getElementById('cat_eye_color');
    let age = document.getElementById('age');
    let catName = document.getElementById('cat_name');

    let table = document.getElementById("cats_table");
    let tableSize = table.rows.length;

    let row = table.insertRow(tableSize);

    let cell_1 = row.insertCell(0);
    let cell_2 = row.insertCell(1);
    let cell_3 = row.insertCell(2);
    let cell_4 = row.insertCell(3);
    let cell_5 = row.insertCell(4);

    cell_1.innerHTML = breed.value;
    cell_2.innerHTML = color.value;
    cell_3.innerHTML = eyeColor.value;
    cell_4.innerHTML = age.value;
    cell_5.innerHTML = catName.value;

    let form = document.getElementById('cat_form');
    form.reset();
}
