import API from '../API';
import { GameType } from '../../types/GameTypes';

export const getGame = async (gameId: string) => {
  const data: GameType = await API.get(`/game/${gameId}`);
  return data;
};

export const createGame = async (quizId: number): Promise<GameType> => {
  const { data } = await API.post('/games', { quizId });
  return data;
};

export const updateGame = async (
  gameId: number,
  nbCorrectAnswers: number,
  nbAnswers: number,
) => {
  const { data } = await API.put(`/games/${gameId}`, {
    nbCorrectAnswers,
    nbAnswers,
  });
  return data;
};
