export type AnswerType = {
  id: number;
  title: string;
  questionId: number;
  rightAnswer: boolean;
};

export type CreateAnswerType = {
  title: string;
  questionId: number;
  rightAnswer: boolean;
};
