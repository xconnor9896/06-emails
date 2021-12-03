const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose
        .connect(url)
        .then(() => console.log('Connecting to database'))
        .catch((err) => console.error(err))
}


module.exports = connectDB;