function isFormValid() {

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const nameRegex = /^[a-zA-Z ]{2,30}$/;

    let firstName = document.getElementById('first_name');
    let lastName = document.getElementById('last_name');
    let email = document.getElementById('email');
    let age = document.getElementById('age');

    if (!nameRegex.test(firstName.value)) {
        firstName.style.borderColor = "red";
        firstName.style.color = "red";
        firstName.value = "INVALID FIRST NAME";
        return false;
    }
    if (!nameRegex.test(lastName.value)) {
        lastName.style.borderColor = "red";
        lastName.style.color = "red";
        lastName.value = "INVALID LAST NAME";
        return false;
    }

    if (!emailRegex.test(email.value)) {
        email.style.borderColor = "red";
        email.style.color = "red";
        email.value = "INVALID EMAIL";
        return false;
    }

    if (isNaN(age.value)) {
        age.style.borderColor = "red";
        age.style.color = "red";
        age.value = "AGE SHOULD BE A NUMBER";
        return false;
    }

    if (age.value < 21) {
        age.style.borderColor = "red";
        age.style.color = "red";
        age.value = "SHOULD BE 21 OR OLDER";
        return false;
    }
    let form = document.getElementById('form');
    form.reset();
    return true;

}
