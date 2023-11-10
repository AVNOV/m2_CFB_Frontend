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

export const createQuestion = async (question: CreateQuestionType) => {
  const data: QuestionType = await API.post('/question', question);
  return data;
};

export const updateQuestion = async (question: UpdateQuestionType) => {
  const data: QuestionType = await API.put(
    `/question/${question.id}`,
    question,
  );
  return data;
};
