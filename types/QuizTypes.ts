import { GameType } from 'types/GameTypes';
import { QuestionType } from 'types/QuestionTypes';
import { UserType } from 'types/UserTypes';

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
