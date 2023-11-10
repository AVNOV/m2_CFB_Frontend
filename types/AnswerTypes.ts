export type AnswerType = {
  id: number;
  title: string;
  questionId: number;
  isCorrect: boolean;
};

export type AnswerCreateType = {
  title: string;
  questionId: number;
  isCorrect: boolean;
};
