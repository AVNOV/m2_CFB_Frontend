import { GameType } from './GameTypes';
import { CreateQuestionType, QuestionType } from './QuestionTypes';
import { UserType } from './UserTypes';
import { ThemeType } from './ThemeTypes';

export type QuizType = {
  id: number;
  title: string;
  difficulty: number;
  themeId: number;
  theme: ThemeType;
  userId: number | null;
  user: UserType | null;
  questions: QuestionType[];
  games: GameType[];
};

export type CreateQuizType = {
  title: string;
  difficulty: number;
  themeId: number;
  userId: number;
};

export type UpdateQuizType = {
  id: number;
  title: string;
  themeId: number;
};
