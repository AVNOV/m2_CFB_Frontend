import { QuizType } from 'types/QuizTypes';

export type GameType = {
  id: number;
  numberCorrectAnswers: number;
  numberAnswers: number;
  quizId: number;
  quiz: QuizType;
  userId: string[];
};

export type CreateGameType = {
  quizId: number;
  userId: string[];
};
