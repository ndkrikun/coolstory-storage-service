const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const State = require('./api/models/state-model')
const routes = require('./api/routes/state-route')
// import { routes } from './api/routes/state-route'

const app = express()
const port = process.env.PORT || 3000
const DB = 'mongodb://localhost:27017/GameDB'

mongoose.Promise = global.Promise;
mongoose.connect(DB)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.listen(port, () =>
  console.log(`RESTful API server started on ${port}`)
);
