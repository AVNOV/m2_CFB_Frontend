import { QuizType } from 'types/QuizTypes';
import { UserType } from 'types/UserTypes';

export type GameType = {
  id: number;
  numberCorrectAnswers: number;
  numberQuestions: number;
  quizzId: number;
  quizz: QuizType;
  user: UserType[];
};

export type CreateGameType = {
  quizzId: number;
  user: UserType[];
};
