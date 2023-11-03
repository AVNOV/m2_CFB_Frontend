import API from '../API';
import { CreateUserType } from '../../types/User/CreateUserType';

export const loginRequest = async (email: string, password: string) => {
  const { data } = await API.post('/login', { email, password });

  if (data.access_token) {
    localStorage.setItem('access_token', data.access_token);
  }

  return { user: data.user, access_token: data.access_token };
};

export const createUser = async (user: CreateUserType) => {
  const { data } = await API.post('/register', user);
  return data;
};
