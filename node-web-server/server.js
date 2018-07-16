const express = require('express');
const hbs = require('hbs');
let app = express();
let port = 3000;

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render("home.hbs", {
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Hi, welcome to my page!'
    });
});

app.get('/about', (req, res) => {
    res.render("about.hbs", {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: "Unable to handle request"
    });
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});