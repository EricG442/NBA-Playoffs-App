function generateInsights(games) {
    if (!games.length) {
        return {
            summary: "No games available",
            avgScore: null,
            highestScoringGame: null
        }
    }

    let totalPoints = 0;
    let highestGame = null;
    let highestPoints = 0;

    games.forEach( game => {
        const [away, home] = game.score.split(" - ").map(Number);
        const combined = away + home;

        totalPoints += combined;

        if (combined > highestPoints) {
            highestPoints = combined;
            highestGame = game.matchup;
        }
    });

    const avgScore = (totalPoints / games.length).toFixed(1);

    return {
        summary: `Average score combined: ${avgScore}`,
        avgScore,
        highestScoringGame: highestGame
    }
}

module.exports = { generateInsights };