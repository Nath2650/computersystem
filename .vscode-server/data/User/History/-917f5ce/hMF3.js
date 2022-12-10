const express = require('express')
const app = express()
const port = 3000
const path = require("path");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const controller = require('./controller')

app.use(express.json());

/*
app.get('/', (req, res) => {
  res.sendFile("login.html", { root: path.join(__dirname, "public") });
})
*/
app.use(express.static(__dirname + '/public'))


app.use("/",controller ); 


app.all('*', (req, res)=> {
  res.status(404).send('<h1> resource not found </h1>')
})

module.exports = app ; 