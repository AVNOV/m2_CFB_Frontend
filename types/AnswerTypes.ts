export type AnswerType = {
  id: number;
  title: string;
  questionId: number;
  isCorrect: boolean;
};

export type CreateAnswerType = {
  title: string;
  questionId: number;
  isCorrect: boolean;
};
