const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = require('./routes/router');
const authentication = require('./auth/authentication');
const cookieparser = require('cookie-parser');
const bodyparser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors({
    origin: process.env.frontendUrl,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.options("*", cors({
    origin: process.env.frontendUrl,
    credentials: true
}));
app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));
app.use(authentication);
app.get("/", (req, res) => {
    res.send("Backend is working 🚀");
});
app.use(router);


app.listen(9000, () => {
    mongoose.connect(process.env.dbUrl)
    .then(() => {
        console.log("Connected");
    })
    console.log("Server is running on port 9000");
})


