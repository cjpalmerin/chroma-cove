require("dotenv").config()

const axios = require("axios");
const router = require("express").Router();

console.log(process.env.UNSPLASH_ACCESS_KEY)

axios.get("https://api.unsplash.com/photos/?client_id=" + process.env.UNSPLASH_ACCESS_KEY)
.then(response => {
    res.json(response);
})
.catch(error => {
     console.log(error);
 })