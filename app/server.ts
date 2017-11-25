const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const State = require('./api/models/state-model')
const setRoutes = require('./api/routes/state-routes')

const app = express()
const port = process.env.PORT || 3000
const dbName = 'mongodb://localhost:27017/GameDB'

mongoose.Promise = global.Promise;
mongoose.connect(dbName)

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

setRoutes(app)

app.listen(port, () =>
  console.log(`RESTful API server started on ${port}`)
);
