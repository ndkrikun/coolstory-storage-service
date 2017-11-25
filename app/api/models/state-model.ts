import { Document, Schema, Model, model } from 'mongoose'
import { IState } from '../../interfaces/state'

export interface IStateModel extends IState, Document {
  createdAt: Date;
  updatedAt: Date;
}

export const StateSchema: Schema = new Schema({
  createdAt: Date,
  updatedAt: Date,
  users: Array,
  started: Boolean,
  stoped: Boolean,
  chatId: Number
})

StateSchema.pre('save', next => {
  let now = new Date()
  if (!this.createdAt) {
    this.createdAt = now
  }
  next()
})

export const State: Model<IStateModel> = model<IStateModel>('State', StateSchema)
