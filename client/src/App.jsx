import { useEffect, useState } from "react";

function App() {
  const [date, setDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [games, setGames] = useState([]);
  const [insights, setInsight] = useState(null);

  const fetchData = async (selectedDate) => {
    try {
      const url = selectedDate
        ? `http://localhost:5000/nba/insights?dates=${selectedDate}`
        : `http://localhost:5000/nba/insights`;

      const res = await fetch(url);
      const data = await res.json();

      setGames(data.games || []);
      setInsight(data.insights || null);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const handleSubmit = () => {
    fetchData(selectedDate);
  };

  // load today's data on first render
  useEffect(() => {
    fetchData();
  }, []);

  // const handleDateChange = (e) => {
  //   const selected = e.target.value;
  //   setDate(selected);
  //   fetchData(selected);
  // };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial"}}>
      <h1>NBA Insights Dashboard</h1>

      {/* Date Picker */}
      <input
        type="date"
        value={date}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <button onClick={handleSubmit}>Load Games</button>
      
      {/* Insight */}
      {insights && (
        <div style={{ marginTop: "20px" }}>
          <h2>Insights</h2>
          <p>{insights.summary}</p>
          <p>Avg Score: {insights.avgScore}</p>
          <p>Top Game: {insights.highestScoringGame}</p>
        </div>
      )}

      {/* Games */}
      <div style={{ marginTop: "20px" }}>
        <h2>Games</h2>
        {games.length === 0 ? (
          <p>No games found</p>
        ) : (
          games.map((game) => (
            <div key={game.id} style={{ marginBottom: "10px" }}>
              <strong>{game.matchup}</strong> - {game.score}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;