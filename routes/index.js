const express = require("express");
const router = express.Router();

const playerRoutes = require("./PlayerRoutes");
// Add other route imports if needed in the future

// Mount specific routes
router.use("/players", playerRoutes);
// Example: router.use("/matches", matchRoutes);

module.exports = router;