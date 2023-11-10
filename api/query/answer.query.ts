import API from 'api/API';
import { CreateAnswerType } from 'types/AnswerTypes';

export const getAnswer = async (answerId: string) => {
  const data = await API.get(`/answer/${answerId}`);
  return data;
};

export const getAnswers = async () => {
  const data = await API.get(`/answer`);
  return data;
};

export const createAnswer = async (answer: CreateAnswerType) => {
  const data = await API.post(`/answer`, answer);
  return data;
};
