import { IUser } from './user'

export interface IGame {
  users: IUser[];
  started: Boolean;
  stoped: Boolean;
  chatId: Number;
}
