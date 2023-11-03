import { GameType } from 'types/GameType';
import { QuestionType } from 'types/QuestionType';
import { UserType } from 'types/User/UserType';

export type QuizType = {
  id: number;
  title: string;
  difficulty: number;
  themeId: number;
  userId: number | null;
  user: UserType | null;
  questions: QuestionType[];
  games: GameType[];
};
