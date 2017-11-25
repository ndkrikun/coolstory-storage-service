import { IPlayer } from './player'

export interface IGame {
  players: IPlayer[];
  started: Boolean;
  stoped: Boolean;
  chatId: Number;
}
