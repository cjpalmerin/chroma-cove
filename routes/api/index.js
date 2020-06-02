const router = require("express").Router();
const favoritesRoutes = require("./favorites");

// Book routes
router.use("/favorites", favoritesRoutes);

module.exports = router;
