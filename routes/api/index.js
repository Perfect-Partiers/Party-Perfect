const router = require("express").Router();
const partyRoutes = require("./party");
const userRoutes = require("./users");

// party routes
router.use("/parties", partyRoutes);

// user routes
router.use("/users", userRoutes);

module.exports = router;
