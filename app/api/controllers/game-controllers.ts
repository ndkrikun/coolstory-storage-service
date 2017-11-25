import { model } from 'mongoose'

const Game = model('Game')

const requestMessage = (complete: Boolean, method: String, name: String) => console.log(`

  ----------------------------------------------------------------------------

  ${complete ? '<---' : '--->'} ${method} Request ${name}

  ----------------------------------------------------------------------------

`)

export const allGames = (req, res) => {
  requestMessage(false, req.method, 'Read all games')
  Game.find({}, (err, game) => {
    err && res.send(err)
    requestMessage(true, req.method, 'Returned games list')
    res.json(game)
  })
}

export const createGame = (req, res) => {
  const newGame = new Game(req.body)
  requestMessage(false, req.method, 'Create game')
  if (Object.keys(req.body).length === 0) {
    requestMessage(true, req.method, 'Failed to create the game')
    res.json({
      message: 'Failed to save the game. Empty body'
    })
  } else {
    newGame.save((err, game) => {
      err && res.send(err)
      requestMessage(true, req.method, `Game is created. Id: ${game._id}`)
      res.json(game)
    })
  }
}

export const readGame = (req, res) => {
  const id = req.params.gameId
  requestMessage(false, req.method, `Read game ${id}`)
  Game.findById(
    id,
    (err, game) => {
      err && res.send(err)
      requestMessage(true, req.method, `Game was readed ${id}`)
      res.json(game)
    }
  )
}

export const updateGame = (req, res) => {
  const id = req.params.gameId
  requestMessage(false, req.method, `Update game ${id}`)
  Game.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true }, 
    (err, game) => {
      err && res.send(err)
      requestMessage(true, req.method, `Game was updated ${id}`)
      res.json(game)
    }
  )
}

export const removeGame = (req, res) => {
  const id = req.params.gameId
  requestMessage(false, req.method, `Remove game ${id}`)
  Game.remove(
    { _id: id },
    err => {
      err && res.send(err)
      requestMessage(true, req.method, `Game was removed ${id}`)
      res.json({
        id,
        message: 'Game successfully deleted'
      })
    }
  )
}
