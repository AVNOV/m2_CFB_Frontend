import { QuestionType } from 'types/Question/QuestionType';
import { UserType } from 'types/User/UserType';

export type QuizzType = {
  id: number;
  title: string;
  difficulty: number;
  themeId: number;
  userId: number | null;
  user: UserType | null;
  questions: QuestionType[];
  games: GameType[];
};
