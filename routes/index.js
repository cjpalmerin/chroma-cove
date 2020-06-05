require("dotenv").config()

const axios = require("axios");
const router = require("express").Router();
const unsplashController = require("../controllers/unsplashController")
const apiRoutes = require('./api')

router.use("/api", apiRoutes)

console.log(process.env.UNSPLASH_ACCESS_KEY)
//create route here app.get(/unsplash/photos)
router.get("/unsplash/photos", unsplashController.getUnsplashPhotos)

router.post("/search/photos", unsplashController.keywordSearch)

router.get("/users/:username/photos", unsplashController.getPortfolio)

router.get("/users/:username", unsplashController.getUserInfo)



module.exports = router
