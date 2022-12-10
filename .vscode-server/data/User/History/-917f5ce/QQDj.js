const express = require('express')
const app = express()
const port = 3000

app.get('/index.html', (req, res) => {
 res.send();
})




const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const sqlite3 = require('sqlite3').verbose();
var crypto = require('crypto');

app.get("/", (req, res) => {
  if (req.session.loggedIn) {
      return res.redirect("/dashboard");
  } else {
      return res.sendFile("login.html", { root: path.join(__dirname, "public") });
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})