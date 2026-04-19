const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("WORKING");
});

app.listen(5000, () => {
  console.log("LISTENING ON 5000");
});