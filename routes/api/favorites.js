const router = require("express").Router();
const favoritesController = require('../../controllers/favoritesController')
const db = require("../../models");

//Has '/api/favorites' before it
router.route('/')
    .get(favoritesController.getFavePhotogs)
    .post(favoritesController.addFavePhotog)

// '/api/favorites/:id'
router.route("/:username")
    .get(favoritesController.addFavePhotog)


router.get("/populate/:username", (req, res) => {
    if(req.params.username) {
    db.User.find({ username: req.params.username }) // Find user ==== logged in user
        .populate("favorites")
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    } else {
        res.json({
            message: "You are not logged in."
        })
    }
});

module.exports = router;