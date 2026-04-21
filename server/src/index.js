require("dotenv").config()
const express = require("express");
const cors = require("cors");
const nbaRoutes = require("./routes/nba");;

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use("/nba", nbaRoutes);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT: ${PORT}`);
});