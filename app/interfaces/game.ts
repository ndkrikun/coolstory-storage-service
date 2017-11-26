import { IPlayer } from './player'

export interface IGame {
  players: IPlayer[];
  turns: Object;
  started: Boolean;
  stoped: Boolean;
  chatId: Number;
}
