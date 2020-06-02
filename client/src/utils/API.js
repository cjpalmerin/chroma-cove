import axios from 'axios';

export default {
    getUnsplashPhotos: function() {
        return axios.get("/unsplash/photos");
    },
    keywordSearch: function(query) {
        return axios.post("/search/photos/", {query});
    },
    getPortfolio: function(username) {
        return axios.get("/users/" + username + "/photos")
    },
    getUserInfo: function(username) {
        return axios.get("/users/" + username)
    }
}