import { QuizType } from 'types/QuizType';
import { UserType } from 'types/User/UserType';

export type GameType = {
  id: number;
  numberCorrectAnswers: number;
  numberQuestions: number;
  quizzId: number;
  quizz: QuizType;
  user: UserType[];
};
