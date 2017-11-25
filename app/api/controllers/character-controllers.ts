import { model } from 'mongoose'

const Character = model('Character')

export const allCharacters = (req, res) => {
  Character.find({}, (err, character) => {
    err && res.send(err)
    res.json(character)
  })
}

export const createCharacter = (req, res) => {
  const newCharacter = new Character(req.body)

  if (Object.keys(req.body).length === 0) {
    res.json({
      message: 'Failed to save the character. Empty body'
    })
  } else {
    newCharacter.save((err, character) => {
      err && res.send(err)
      res.json(character)
    })
  }
}

export const readCharacter = (req, res) => {
  const id = req.params.characterId
  Character.findById(
    id,
    (err, character) => {
      err && res.send(err)
      res.json(character)
    }
  )
}

export const updateCharacter = (req, res) => {
  const id = req.params.characterId
  Character.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true }, 
    (err, character) => {
      err && res.send(err)
      res.json(character)
    }
  )
}

export const removeCharacter = (req, res) => {
  const id = req.params.characterId
  Character.remove(
    { _id: id },
    err => {
      err && res.send(err)
      res.json({
        id,
        message: 'Character successfully deleted'
      })
    }
  )
}
