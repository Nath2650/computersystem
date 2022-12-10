const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile("login.html", { root: path.join(__dirname, "public") });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})