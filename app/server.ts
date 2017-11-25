const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Game = require('./api/models/game-model')
const Character = require('./api/models/character-model')
const setGameRoutes = require('./api/routes/game-routes')
const setCharacterRoutes = require('./api/routes/character-routes')

const app = express()
const port = process.env.PORT || 3000
const dbName = 'mongodb://localhost:27017/GameDB'

mongoose.Promise = global.Promise

mongoose.connect(
  dbName,
  { useMongoClient: true }
)

mongoose.connection.on(
  'error',
  err => console.log(`Connection error: ${err.message}`)
)

mongoose.connection.once(
  'open',
  () => console.log('Successfuly connected to DB')
)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

setGameRoutes(app)
setCharacterRoutes(app)

app.listen(port, () =>
  console.log(`RESTful API server started on ${port}`)
);
