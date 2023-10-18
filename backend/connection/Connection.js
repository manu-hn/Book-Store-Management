
const { connect, } = require('mongoose');
require('dotenv').config();

connect(process.env.URL)
    .then(() => {
        console.log(`Successfully Connected With MongoDB Atlas`);

    })
    .catch((error) => {
        console.log(error)
    })