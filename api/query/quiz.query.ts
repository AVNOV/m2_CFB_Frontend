import API from '../API';
import {
  CreateQuizType,
  QuizType,
  UpdateQuizType,
} from '../../types/QuizTypes';

export const getQuiz = async (quizId: string) => {
  const data: QuizType = await API.get(`/quiz/${quizId}`);
  return data;
};

export const getQuizzes = async () => {
  const data: QuizType[] = await API.get('/quiz');
  return data;
};

export const createQuiz = async (quiz: CreateQuizType) => {
  const data: QuizType = await API.post('/quiz', quiz);
  return data;
};

export const updateQuiz = async (quiz: UpdateQuizType) => {
  const data: QuizType = await API.put(`/quiz/${quiz.id}`, quiz);
  return data;
};
