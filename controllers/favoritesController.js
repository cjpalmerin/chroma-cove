const db = require("../models");

module.exports = {
    //GET ALL FAVORITE PHOTOGRAPHERS
    getFavePhotogs: function(req, res) {
        db.Favorites
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    addFavePhotog: function(req, res) {
        console.log(req)
        db.Favorites
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}