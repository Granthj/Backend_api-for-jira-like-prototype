const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = require('./routes/router');
const authentication = require('./auth/authentication');
const cookieparser = require('cookie-parser');
const bodyparser = require('body-parser')

const app = express();
app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));

app.use(authentication);
app.use(router);


app.listen(9000, () => {
    mongoose.connect('mongodb+srv://root:8318383381@cluster0.nkubvfc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Connected");
    })
    console.log("Server is running on port 9000");
})


