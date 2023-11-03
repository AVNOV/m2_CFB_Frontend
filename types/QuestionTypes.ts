import { AnswerType } from 'types/AnswerTypes';
import { QuizType } from 'types/QuizTypes';

export type QuestionType = {
  id: number;
  title: string;
  quizzes: QuizType[];
  answers: AnswerType[];
};
