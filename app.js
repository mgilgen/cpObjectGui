const fs = require("fs").promises;
const fetch = require("node-fetch");

const express = require("express");
const app = express();
const port = 3000;

app.get("/login", function (req, res) {
  res.redirect("/login.html");
  //res.send("Hello World");
});

app.post("/login", function (req, res) {
  console.log(req.body);
  res.send(req.body);
  res.end();
})

app.use(express.static("public"));
app.listen(port);
