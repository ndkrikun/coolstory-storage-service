import { Document, Schema, Model, model } from 'mongoose'
import { IGame } from '../../interfaces/game'

export interface IGameModel extends IGame, Document {
  createdAt: Date;
  updatedAt: Date;
}

export const GameSchema: Schema = new Schema({
  createdAt: Date,
  updatedAt: Date,
  users: Array,
  started: Boolean,
  stoped: Boolean,
  chatId: Number
})

GameSchema.pre('save', next => {
  let now = new Date()
  if (!this.createdAt) {
    this.createdAt = now
  }
  next()
})

export const Game: Model<IGameModel> = model<IGameModel>('Game', GameSchema)
