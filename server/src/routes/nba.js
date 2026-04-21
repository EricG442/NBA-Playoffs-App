const express = require("express");
const router = express.Router();

const { getGames } = require("../services/nbaService");
const { generateInsights } = require("../utils/insights");

router.get("/games", async (req, res) => {
    try {
        let { dates, page } = req.query;
        //normalize to array
        if (dates && !Array.isArray(dates)) {
            dates = [dates];
        }

        const games = await getGames({ dates, page });
        res.json({ games });
    } catch (err) {
        console.error("NBA route error:", err.message);
        res.status(500).json({ error: "Failed to fetch games" });
    }
});

router.get("/insights", async (req, res) => {
    try {
        let { dates, page } = req.query;
        //normalize array
        if (dates && !Array.isArray(dates)) {
            dates = [dates];
        }

        const games = await (getGames({ dates, page }));

        const insights = generateInsights(games);

        res.json({
            filters: { dates },
            insights,
            totalGames: games.length,
            games
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to generate insights" });
    }
});

module.exports = router;