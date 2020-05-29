const axios = require("axios");

module.exports = {
    getUnsplashPhotos: function (req, res) {
        axios.get("https://api.unsplash.com/photos/?client_id=" + process.env.UNSPLASH_ACCESS_KEY)
            .then(response => {
                res.json(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
}