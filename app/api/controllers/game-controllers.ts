import { model } from 'mongoose'

const Game = model('Game')

export const allGames = (req, res) => {
  Game.find({}, (err, game) => {
    err && res.send(err)
    res.json(game)
  })
}

export const createGame = (req, res) => {
  const newGame = new Game(req.body)
  newGame.save((err, game) => {
    err && res.send(err)
    res.json({
      id: game._id,
      message: 'Game successfully created'
    })
  })
}

export const readGame = (req, res) => {
  const id = req.params.gameId
  Game.findById(
    id,
    (err, game) => {
      err && res.send(err)
      res.json(game)
    }
  )
}

export const updateGame = (req, res) => {
  const id = req.params.gameId
  Game.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true }, 
    (err, game) => {
      err && res.send(err)
      res.json(game)
    }
  )
}

export const removeGame = (req, res) => {
  const id = req.params.gameId
  Game.remove(
    { _id: id },
    err => {
      err && res.send(err)
      res.json({
        id,
        message: 'Game successfully deleted'
      })
    }
  )
}