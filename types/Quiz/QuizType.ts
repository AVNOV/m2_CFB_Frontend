import { GameType } from 'types/Game/GameType';
import { QuestionType } from 'types/Question/QuestionType';
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
