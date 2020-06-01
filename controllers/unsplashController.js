require("dotenv").config()
const axios = require("axios");

module.exports = {
    // GET RANDOM PHOTOS:
    getUnsplashPhotos: function (req, res) {
        axios.get("https://api.unsplash.com/photos/?client_id=" + process.env.UNSPLASH_ACCESS_KEY)
            .then(response => {
                res.json(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    // GET PHOTOS BY KEYWORD
    keywordSearch: function (req, res) {
        const { query } = req.body;
        axios.get("https://api.unsplash.com/search/photos?query=" + query.trim() + "&client_id=" + process.env.UNSPLASH_ACCESS_KEY)
            .then(response => {
                res.json(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    },
    // GET PHOTOS BY PHOTOGRAPHER
    getPortfolio: function (req, res) {
        const { username } = req.params;
        axios.get(`https://api.unsplash.com/users/${username}/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    },
    // GET PHOTOGRAPHER INFO
    getUserInfo: function (req, res) {
        const { username } = req.params;
        axios.get(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
            .then(response => {
                res.json(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    }

}