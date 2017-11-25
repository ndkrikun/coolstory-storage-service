import { model } from 'mongoose'
import { requestMessage } from '../../libs/terminal-messages'

const Character = model('Character')

export const allCharacters = (req, res) => {
  requestMessage(false, req.method, 'Read all characters')
  Character.find({}, (err, character) => {
    err && res.send(err)
    requestMessage(true, req.method, 'Returned characters list')
    res.json(character)
  })
}

export const createCharacter = (req, res) => {
  const newCharacter = new Character(req.body)
  requestMessage(false, req.method, 'Create new character')
  if (Object.keys(req.body).length === 0) {
    requestMessage(true, req.method, 'Failed to create new character')
    res.json({
      message: 'Failed to save the character. Empty body'
    })
  } else {
    newCharacter.save((err, character) => {
      err && res.send(err)
      requestMessage(true, req.method, 'New character was created')
      res.json(character)
    })
  }
}

export const readCharacter = (req, res) => {
  const id = req.params.characterId
  requestMessage(false, req.method, `Read character ${id}`)
  Character.findById(
    id,
    (err, character) => {
      err && res.send(err)
      requestMessage(true, req.method, `Character was readed ${id}`)
      res.json(character)
    }
  )
}

export const updateCharacter = (req, res) => {
  const id = req.params.characterId
  requestMessage(false, req.method, `Update character ${id}`)
  Character.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true }, 
    (err, character) => {
      err && res.send(err)
      requestMessage(true, req.method, `Character was updated ${id}`)
      res.json(character)
    }
  )
}

export const removeCharacter = (req, res) => {
  const id = req.params.characterId
  requestMessage(false, req.method, `Remove character ${id}`)
  Character.remove(
    { _id: id },
    err => {
      err && res.send(err)
      requestMessage(true, req.method, `Character was removed ${id}`)
      res.json({
        id,
        message: 'Character successfully deleted'
      })
    }
  )
}
