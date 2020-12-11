const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug')
app.listen(3000);


app.get("/hello", ((req, res) => {
    res.send("Hello World")
}))

app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, '/views', 'form.html'));
});

app.post('/formdata', (req, res) => {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const age = req.body.age;
    var response = {"first_name": firstName, "last_name": lastName, "age": age}

    res.status(200).json(response);
    res.end();
})

app.post('/formdata', (req, res) => {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const age = req.body.age;

    res.render('formdata',
        {
            title: "task 8c",
            firstname: firstName,
            lastname: lastName,
            age: age
        });
})

app.post('/jsondata', (req, res) => {

    console.log(req.body);

    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const PESEL = req.body.pesel;
    const email = req.body.email;

    res.render('jsondata',
        {
            title: "task 8d",
            firstname: firstName,
            lastname: lastName,
            pesel: PESEL,
            email: email
        });
})

/*
 curl --location --request POST 'http://localhost:3000/jsondata' --header 'Content-Type: application/json' --data-raw '{
    "first_name": "anna",
    "last_name": "miklash",
    "pesel": 1234567890,
    "email": "s18458@pjwstk.edu.pl"
}'
 */


