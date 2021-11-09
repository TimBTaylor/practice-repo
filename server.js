const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("it worked");
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});

module.exports = app;
