function convertTemperature() {

    var input = document.getElementById('temp_input').value;
    var checkboxToCelsius = document.getElementById('toCelsius');
    var checkboxToFahrenheit = document.getElementById('toFahrenheit');

    if (checkboxToCelsius.checked && !checkboxToFahrenheit.checked) {
        let output = (input - 32) / 1.8;
       document.getElementById('output').value = output;
    } else if (checkboxToFahrenheit.checked && !checkboxToCelsius.checked) {
        let output = input * 1.8 + 32;
        document.getElementById('output').value = output;
    } else if ((checkboxToFahrenheit.checked && checkboxToCelsius.checked) || (!checkboxToFahrenheit.checked && !checkboxToCelsius.checked)) {
        alert("PLEASE SELECT ONE OPTION OF CONVERSION");
    }

}

