import axios from 'axios';

export default {
    //GET RANDOM PHOTOS ======UNSPLASH======
    getUnsplashPhotos: function () {
        return axios.get("/unsplash/photos");
    },

    keywordSearch: function(query) {
        return axios.post("/search/photos/", {query});
    },
    //GETS ALL PHOTOS FROM A SPECIFIC PHOTOGRPAHER ======UNSPLASH======
    getPortfolio: function (username) {
        return axios.get("/users/" + username + "/photos")
    },
    //GETS THE INFORMATION OF A SPECIFIC PHOTOGRAPHER ======UNSPLASH======
    getUserInfo: function (username) {
        return axios.get("/users/" + username)
    },
    //GET USER'S FAVORITE PHOTOGRAPHERS ======CHROMACOVE======
    getFavePhotogs: function () {
        return axios.get("api/favorites")
    },
    //GET USER'S FAVORITE PHOTOGRAPHERS ======CHROMACOVE======
    addFavePhotog: function (username) {
        return axios.post("/api/favorites/", {username})
    }

}