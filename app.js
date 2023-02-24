const fs = require("fs").promises;
const fetch = require("node-fetch");
const bp = require("body-parser")
const cors = require("cors");
const https = require('https');

const express = require("express");
const app = express();
const port = 3000;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public', { maxAge: '1d' }));
app.use(cors({ 
  methods: ['GET', 'POST'],
  origin: '*'
}))

app.get("/login", function (req, res) {
  res.redirect("/login.html");
  //res.send("Hello World");
});

app.post("/login", async function (req, res) {
  console.log("Request-Body: " + JSON.stringify(req.body));


const requestData = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
} 
  // set env 
  // "export NODE_TLS_REJECT_UNAUTHORIZED=0" 
  // in order to send insecure requests with expressjs
 
  
  let loginData = await fetch("https://10.20.1.11:443/web_api/login", requestData)
                        .then( (res) => res.json() )
                        .catch( (error) => console.log(error) );

  //console.log(loginData);

  res.status(200).send(loginData);

});

app.use(express.static("public"));
app.listen(port);
