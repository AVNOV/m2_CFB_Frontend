import API from 'api/API';
import { AnswerType, CreateAnswerType } from 'types/AnswerTypes';

export const getAnswer = async (answerId: string) => {
  const data = await API.get(`/answer/${answerId}`);
  return data;
};

export const getAnswers = async () => {
  const data = await API.get(`/answer`);
  return data;
};

export const createAnswer = async (
  answer: CreateAnswerType,
): Promise<AnswerType> => {
  const { data } = await API.post(`/answers`, answer);
  return data;
};
