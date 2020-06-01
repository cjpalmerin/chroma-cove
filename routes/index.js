require("dotenv").config()

const axios = require("axios");
const router = require("express").Router();
const unsplashController = require("../controllers/unsplashController")

console.log(process.env.UNSPLASH_ACCESS_KEY)
//create route here app.get(/unsplash/photos)
router.get("/unsplash/photos", unsplashController.getUnsplashPhotos)

module.exports = router
