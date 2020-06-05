const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
    //GET ALL FAVORITE PHOTOGRAPHERS
    getFavePhotogs: function(req, res) {
        db.User
        .find(req.params.username)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    addFavePhotog: function(req, res) {
        if (req.user) {
            let {bio, profile_image, username, photos} = req.body
            console.log(req.user.username)  //find their id in the req.user object
            db.Favorites.create({
                username, bio, profile_image,photos

            }).then(({_id}) => {
                db.User.findOneAndUpdate({username: req.user.username}, {$push : {favorites: _id }}, {new: true})
                .then(fullSuccess => {
                    res.json(true)
                })
            }).catch(err => {
                res.json({error: true,
                message: "Did not successfully add favorite"})
            })
        } else {
            //they are not logged in send em elsewhwere
            res.json({error: true,
                message: "User not logged in"})
        }
    },

    deletePhotog:function (req, res) {
        console.log(req.params.username);
        
        // db.User.favorites = db.User.favorites.filter(photo => photo.id === id)
        db.User.findOneAndUpdate({username: req.user.username}, {$pull : {favorites: req.params.username}}, {new: true})
        .then(success => {

            res.json(true)
            console.log("hello");
        } 
        )
    }
}