const express = require('express');
require('dotenv').config()
const BookRoutes = require('./routes/BookRoutes')
require('./connection/Connection.js')
const cors = require('cors');

const app = express()


app.use(express.json())

app.use(cors())


app.use('/api/books', BookRoutes);

app.use('*', (request, response, next)=>{
    response.status(404).send('Page Not Found')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on PORT ${process.env.PORT}`)
})
