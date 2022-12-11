const express = require('express');
const app = express.Router();
const path = require('path');
const bodyParser = require('body-parser');


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile("login.html", {root: path.join(__dirname, "public") });
  })


/*
app.post("/signup", (req, res) => {
       addUserToDatabase(req.body.username, req.body.password);
})
*/


app.get('/register', (req,res) => {
  res.sendFile("register.html", {root: path.join(__dirname, "public") });
})


app.get('/login', (req,res) => {
  res.sendFile("login.html", { root: path.join(__dirname, "public") });
})




//Opret en bruger. Ind i databasen.
/*
const RegisterUser = (username, password) => {
  console.log([username, password])
};
*/


app.post("/register", bodyParser.urlencoded(), async (req, res) => {

  //RegisterUser(req.body.username, req.body.password);
  const userCreated = req.body
  db.registerUser(userCreated)
})


  module.exports = app