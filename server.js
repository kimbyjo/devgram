const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const profile = require('./routes/profile');
const post = require('./routes/post');

//Initialize express app
const app = express();

//DB config
const db = require('./config/keys').mongoURI

//Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true })
    .then(() => console.log('MongoDB is now connected!'))
    .catch(err => console.log(err));


//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.listen(5050, () => {
    console.log('Server is running on port 5050!');
});

//Use routes
app.use('/user', user);
app.use('/profile', profile);
app.use('/post', post);

/*
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/test', (req, res) => {
    res.send('Hello Test!');
});

app.post('/hello', (req, res) => {
    res.json(req.body);
});


//Middleware Test
app.use((req, res, next) => {
    console.log('Hey it\'s middleware here!')
    next();
});
*/


