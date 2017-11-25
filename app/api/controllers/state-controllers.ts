import { model } from 'mongoose'

const State = model('State')

export const allStates = (req, res) => {
  State.find({}, (err, state) => {
    err && res.send(err)
    res.json(state)
  })
}

export const createState = (req, res) => {
  const newState = new State(req.body)
  newState.save((err, state) => {
    err && res.send(err)
    res.json(state._id)
  })
}

export const readState = (req, res) => {
  State.findById(
    req.params.gameId,
    (err, state) => {
      err && res.send(err)
      res.json(state)
    }
  )
}

export const updateState = (req, res) => {
  State.findOneAndUpdate(
    { _id: req.params.gameId },
    req.body,
    { new: true }, 
    (err, state) => {
      err && res.send(err)
      res.json(state)
    }
  )
}

export const removeState = (req, res) => {
  State.remove(
    { _id: req.params.gameId },
    err => {
      err && res.send(err)
      res.json({ message: 'Game state successfully deleted' })
    }
  )
}
