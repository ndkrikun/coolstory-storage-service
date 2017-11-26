import { Document, Schema, Model, model } from 'mongoose'
import { ICharacter } from '../../interfaces/character'

export interface ICharacterModel extends ICharacter, Document {}

export const CharacterSchema: Schema = new Schema({
  name: String,
  description: String,
  img: String,
  facts: Array
})

export const Character: Model<ICharacterModel> = model<ICharacterModel>('Character', CharacterSchema)
