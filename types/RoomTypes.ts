import { GameType } from './GameTypes';
import { UserType } from './UserTypes';

export type RoomType = {
  id: number;
  code: string;
  game: GameType;
  users: UserType[];
};
