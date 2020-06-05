const router = require("express").Router();
const favoritesRoutes = require("./favorites");

// Book routes
router.use("/favorites", favoritesRoutes);


router.delete("/users/:id",favoritesController.deletePhotog)

module.exports = router;
