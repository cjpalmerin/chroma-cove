const mongoose = require('mongoose')
const Schema = mongoose.Schema


const favoritesSchema = new Schema({
    username: { type: String, required: true },

})

const Favorites = mongoose.model("Favorites", favoritesSchema);

module.exports = Favorites;
