const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.get('/', (req, res) => {
  res.send('Hello bitches!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.json());
app.use(cors())


app.use(express.static('./public'))

module.exports = app ; 