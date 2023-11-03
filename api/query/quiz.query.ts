import API from '../API';
import { QuizType } from '../../types/QuizTypes';

export const getQuiz = async (quizId: string) => {
  const data: QuizType = await API.get(`/quiz/${quizId}`);
  return data;
};

export const getQuizzes = async () => {
  const data: QuizType[] = await API.get('/quiz');
  return data;
};
