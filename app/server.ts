// import { sum } from './calc';

// const numbersToAdd = [ 3, 4, 10, 2];
// const result = sum(numbersToAdd)
// console.log(`The result is: ${result}`)

import * as express from 'express';

const app = express()
const port = 3000

app.listen(port, () =>
  console.log(`Express server listening on port ${port}`)
);

import './api/models/gameStateModel'
