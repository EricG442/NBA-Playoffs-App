const express = require("express");
const router = express.Router();

const { getGames } = require("../services/nbaService");

router.get("/games", async (req, res) => {
    try {
        let { dates, page } = req.query;

        if (dates && !Array.isArray(dates)) dates = [dates];

        const games = await getGames({ dates, page });
        res.json({ games });
    } catch (err) {
        console.error("NBA route error:", err.message);
        res.status(500).json({ error: "Failed to fetch games" });
    }
});

module.exports = router;