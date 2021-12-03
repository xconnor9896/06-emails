// import the goods
// load up the .env file
require('dotenv').config();
require('express-async-errors');

// create app
const express = require('express');
const app = express();
const {sendEmail, resetEmail} = require('./controllers/sendEmail')


// use the json middleware
app.use(express.json());
app.use(express.static('./public'));
app.use('/reset/:id', express.static('./form'));

// create a path for home that returns an h1 with EMAIL PROJECT
// and an anchor with an href to /send that says SEND EMAIL
app.get('/', (req, res) => {
    res.send('<h1>Email Project</h1><a href="/send">Send Email</a>');
});

app.get('/send', sendEmail);
app.get('/reset', resetEmail);

// create your port variable
const port = process.env.PORT || 3000;

// create your app startup function
const start = () => {
    try {
        app.listen(port, console.log(`listening at port ${port}`));
    } catch (err) {
        
    }
}

// run the app startup function
start();