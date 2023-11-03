import { QuizzType } from "types/Quizz/QuizzType";

export type QuestionType = {
  id: number;
  title: string;
  quizz: QuizzType[];
  answers: AnswerType[];
};
