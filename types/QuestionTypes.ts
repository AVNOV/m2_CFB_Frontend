import { AnswerType } from './AnswerTypes';
import { QuizType } from './QuizTypes';

export type QuestionType = {
  id: number;
  title: string;
  quizId: number;
  quizzes: QuizType[];
  answers: AnswerType[];
};

export type UpdateQuestionType = {
  id: number;
  quizId: number;
  title: string;
};

export type CreateQuestionType = {
  title: string;
};
