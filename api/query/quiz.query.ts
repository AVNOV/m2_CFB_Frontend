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

export const createQuiz = async (quiz: CreateQuizType): Promise<QuizType> => {
  const { data } = await API.post('/quizzes', quiz);
  return data;
};

export const updateQuiz = async (quiz: UpdateQuizType): Promise<QuizType> => {
  const { data } = await API.put(`/quizzes/${quiz.id}`, quiz);

  return data;
};

export const getRandomQuiz = async (themeId: number) => {
  const { data } = await API.get(`/quizzes/${themeId}/random`);
  return data;
};
