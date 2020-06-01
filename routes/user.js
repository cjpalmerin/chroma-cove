const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('../passport')

router.post('/signup', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password)

})