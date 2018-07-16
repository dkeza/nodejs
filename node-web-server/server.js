const express = require('express');
const hbs = require('hbs');
let app = express();
let port = 3000;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render("home.hbs", {
        pageTitle: 'Home Page',
        welcomeMessage: 'Hi, welcome to my page!'
    });
});

app.get('/about', (req, res) => {
    res.render("about.hbs", {
        pageTitle: 'About Page',
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