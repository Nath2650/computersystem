const express = require('express') ;
// const formData = require('express-form-data')
const app = express() ;
const PORT = 3000
const cors = require('cors')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server lytter på port ${PORT}`)
  });

//routes
// Forbinder localhost:3000 med vores index.html

