import { IUser } from './user'

export interface IState {
  users: IUser[];
  started: Boolean;
  stoped: Boolean;
  chatId: Number;
}
