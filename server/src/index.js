require("dotenv").config()
const express = require("express");
const nbaRoutes = require("./routes/nba");;

const app = express();

app.use("/nba", nbaRoutes);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(5000, () => {
  console.log("LISTENING ON 5000");
});