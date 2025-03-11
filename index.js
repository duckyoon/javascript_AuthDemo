const express = require('express');
const app = express();
const User = require('./models/user');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/secrets', (req, res) => {
    res.send('Here we go!')
})

app.listen(3000,() => {
    console.log("Serving your App")
})