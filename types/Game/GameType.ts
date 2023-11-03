import { QuizzType } from 'types/Quizz/QuizzType';
import { UserType } from 'types/User/UserType';

export type GameType = {
  id: number;
  numberCorrectAnswers: number;
  numberQuestions: number;
  quizzId: number;
  quizz: QuizzType;
  user: UserType[];
};
