const express = require('express');
const app = express.Router();

app.get('/', (req, res) => {
    res.sendFile("login.html", {root: path.join(__dirname, "public") });
  })


  module.exports = app