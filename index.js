const express = require("express");
const app = express();
const port = 8081;

app.get("/", (req, res) => {
  res.send("server onpend!");
});

app.listen(port, () => {
  console.log("Listeing...");
});
