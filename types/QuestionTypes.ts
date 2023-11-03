import { AnswerType } from './AnswerTypes';
import { QuizType } from './QuizTypes';

export type QuestionType = {
  id: number;
  title: string;
  quizzes: QuizType[];
  answers: AnswerType[];
};
