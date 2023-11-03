import { AnswerType } from 'types/Answer/AnswerType';
import { QuizType } from 'types/Quiz/QuizType';

export type QuestionType = {
  id: number;
  title: string;
  quizzes: QuizType[];
  answers: AnswerType[];
};
