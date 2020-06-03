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
        if (req.user) {
            console.log(req.user.username)  //find their id in the req.user object
            db.Favorites.create({
                username: req.body.username
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
            // console.log(req.user)
        
        //db.Favorites
        //.create(req.body)
        //.then(dbModel => res.json(dbModel))
        //.catch(err => res.status(422).json(err))
    }
}