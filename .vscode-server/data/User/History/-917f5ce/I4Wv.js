const express = require('express')
const app = express()
const port = 3000
const path = require("path");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static(__dirname + '/public'))


app.use(express.json());


const controller = require('./controller')

app.use("/", controller ); 

