const router = require("express").Router();
const favoritesController = require('../../controllers/favoritesController')

//Has '/api/favorites' before it
router.route('/')
    .get(favoritesController.getFavePhotogs)
    .post(favoritesController.addFavePhotog)

//'/api/favorites/:id'
router.route("/:username")
    .get(favoritesController.addFavePhotog)


router.get("/api/favorites", (req, res) => {
    if(req.user) {
    db.User.find({ username: req.user.username }) // Find user ==== logged in user
        .populate("favorites")
        .then(data => {
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