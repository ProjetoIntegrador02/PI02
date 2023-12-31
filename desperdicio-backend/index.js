const express = require('express'),
    app = express(),
    bodyparser = require('body-parser');
require('express-async-errors')

const db = require('./db'),
    donationRoutes = require('./controllers/donation.controller')

const cors = require("cors");


//middleware
app.use(cors());
app.use(bodyparser.json())
app.use('/api/donations', donationRoutes)
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})


//first make sure db connection is successful
//then start the express server.
db.query("SELECT 1")
    .then(() => {
        console.log('db connection  succeeded.')
        app.listen(3001,
            () => console.log('server started at 3001'))
    })
    .catch(err => console.log('db connection failed. \n' + err))
