import axios from 'axios';

export default {
    getUnsplashPhotos: function() {
        return axios.get("/unsplash/photos");
    }
}