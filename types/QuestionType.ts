import { AnswerType } from 'types/AnswerType';
import { QuizType } from 'types/QuizType';

export type QuestionType = {
  id: number;
  title: string;
  quizzes: QuizType[];
  answers: AnswerType[];
};
