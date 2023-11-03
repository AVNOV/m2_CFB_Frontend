import { GameType } from './GameTypes';
import { QuestionType } from './QuestionTypes';
import { UserType } from './UserTypes';

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
