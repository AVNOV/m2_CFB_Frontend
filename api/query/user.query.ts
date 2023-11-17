import API from '../API';
import { CreateUserType, UpdateUser } from '../../types/UserTypes';
import { UserType } from '../../types/UserTypes';

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

export const getUser = async (userId: string) => {
  const data: UserType = await API.get(`/user/${userId}`);
  return data;
};

export const updateUser = async (user: UpdateUser) => {
  const data: UserType = await API.patch(`/user/${user.id}`, user);
  return data;
};
