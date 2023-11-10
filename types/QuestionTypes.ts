import { AnswerType, CreateAnswerType } from './AnswerTypes';
import { QuizType } from './QuizTypes';

export type QuestionType = {
  id: number;
  title: string;
  quizzes: QuizType[];
  answers: AnswerType[];
};

export type CreateQuestionType = {
  title: string;
  quizId: number;
  answers: CreateAnswerType[];
};
