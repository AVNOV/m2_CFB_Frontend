import {
  CreateQuestionType,
  QuestionType,
  UpdateQuestionType,
} from 'types/QuestionTypes';
import API from '../API';

export const getQuestions = async () => {
  const data = await API.get('/question');
  return data;
};

export const getQuestion = async (questionId: string) => {
  const data = await API.get(`/question/${questionId}`);
  return data;
};

export const createQuestion = async (
  question: CreateQuestionType,
): Promise<QuestionType> => {
  const { data } = await API.post('/questions', question);
  return data;
};

export const updateQuestion = async (
  question: UpdateQuestionType,
): Promise<QuestionType> => {
  const { data } = await API.put(`/question/${question.id}`, question);
  return data;
};
