const router = require("express").Router();
const favoritesController = require('../../controllers/favoritesController')

//Has '/api/favorites' before it
router.route('/')
    .get(favoritesController.getFavePhotogs)

//'/api/favorites/:id'
router.route("/:id")
    .get(favoritesController.addFavePhotog)

module.exports = router;