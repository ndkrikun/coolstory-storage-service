import { Document, Schema, Model, model } from 'mongoose'
import { IGame } from '../../interfaces/game'

export interface IGameModel extends IGame, Document {
  createdAt: Date;
  updatedAt: Date;
}

export const GameSchema: Schema = new Schema({
  chatId: Number,
  started: Boolean,
  stopped: Boolean,
  players: Array,
  turns: Object,
  minus: Number,
  plus: Number
})

GameSchema.pre('save', next => {
  let now = new Date()
  if (!this.createdAt) {
    this.createdAt = now
  }
  this.updatedAt = now;
  next()
})

export const Game: Model<IGameModel> = model<IGameModel>('Game', GameSchema)
