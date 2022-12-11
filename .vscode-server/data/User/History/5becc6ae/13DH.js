const express = require('express');
const app = express.Router();
const path = require("path");

app.get('/', (req, res) => {
    res.sendFile("login.html", {root: path.join(__dirname, "public") });
  })


app.post("/signup", (req, res) => {
       addUserToDatabase(req.body.username, req.body.password);
})

app.get('/register.html', (req,res) => {
  res.sendFile("register.html", {root: path.join(__dirname, "public") });

})




  module.exports = app