const BASE_URL = "https://api.balldontlie.io/v1";
const api_key = process.env.BALLDONTLIE_API_KEY;

function getDate() {
    return new Date().toISOString().split("T")[0];
}

function normalizeGame(game) {
    return {
        id: game.id,
        matchup: `${game.visitor_team.abbreviation} @ ${game.home_team.abbreviation}`,
        score: `${game.visitor_team_score} - ${game.home_team_score}`,
        date: game.date
    }
}

async function getGames({ dates, page = 1} = {}) {
    const params = new URLSearchParams();
    params.append("per_page", 5);
    params.append("page", page);

    // default to todays date if none is passed
    const queryDates = dates && dates.length ? dates : [getDate()];

    queryDates.forEach(d => params.append("dates[]", d));

    const url = `${BASE_URL}/games?${params.toString()}`;

    const res = await fetch(`${BASE_URL}/games?dates[]=2026-04-20`, {
        headers: {
            Authorization: api_key
        }
    });

    const json = await res.json();
    
    if(!json.data) {
        throw new Error("No data returned from API");
    }

    return json.data.map(normalizeGame);
}

module.exports = { getGames };