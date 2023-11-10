import { AnswerType } from './AnswerTypes';
import { QuizType } from './QuizTypes';

export type QuestionType = {
  id: number;
  title: string;
  quizId: number;
  quizzes: QuizType[];
  answers: AnswerType[];
};

export type CreateQuestionType = {
  title: string;
  quizId: number;
};

export type UpdateQuestionType = {
  id: number;
  title: string;
  quizId: number;
};
