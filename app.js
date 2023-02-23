const fs = require("fs").promises;
const fetch = require("node-fetch");

const express = require("express");
const app = express();
const port = 3000;

app.get("/login", function (req, res) {
  res.send("Hello World");
});

app.use(express.static("public"));
app.listen(port);

