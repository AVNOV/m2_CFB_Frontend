import API from '../API';
import { CreateGameType, GameType } from '../../types/GameTypes';

export const getGame = async (gameId: string) => {
  const data: GameType = await API.get(`/game/${gameId}`);
  return data;
};

export const createGame = async (game: CreateGameType) => {
  const data: GameType = await API.post(`/game`, game);
  return data;
};
