import axios from 'axios';

export default {
    //GET RANDOM PHOTOS ======UNSPLASH======
    getUnsplashPhotos: function () {
        return axios.get("/unsplash/photos");
    },
    //SEARCH FOR PHOTOS WITH A KEYWORD ======UNSPLASH======
    keywordSearch: function () {
        return axios.get("/search/photos");
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
    addFavePhotog: function (id) {
        return axios.post("api/favorites/:id")
    }

}