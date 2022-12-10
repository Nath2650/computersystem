const express = require('express') ;
// const formData = require('express-form-data')
const app = express() ;
const PORT = 3000
const path = require('path');
const { Navigator } = require('node-navigator')
const navigator = new Navigator();
const cors = require('cors')


app.listen(PORT, () => {
    console.log(`Server lytter på port ${PORT}`)
  });

//routes
const controller = require('./controller')

app.use(express.json());
app.use(cors())

// Forbinder localhost:3000 med vores index.html

app.use("/home", controller ); 

app.all('*', (req, res)=> {
  res.status(404).send('<h1> resource not found </h1>')
})

module.exports = app ; 
