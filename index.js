const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost:27017/authDemo', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
})
.catch(err => {
    console.log('MONGO CONNECTION ERROR!!!')
    console.log(err)
})

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send('This is home page!!!!')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash,
    })
    await user.save()
    res.redirect('/');
})

app.get('/secrets', (req, res) => {
    res.send('Here we go!')
})

app.listen(3000,() => {
    console.log("Serving your App")
})