const express = require("express");
const router = express.Router();

router.get("/games", (req, res) => {
    res.json({ games: ["LAL vs BOS"]});
});

module.exports = router;