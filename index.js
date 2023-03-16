const express = require('express')
const items = require('./data').items
const app = express()
const PORT = 4000

var cors = require('cors')

app.use(express.json())

app.use(cors())

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.json({ items: response })
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app
