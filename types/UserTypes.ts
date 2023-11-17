import { RoomType } from './RoomTypes';

export type UserType = {
  firstname: string;
  lastname: string;
  email: string;
  id: number;
  room?: RoomType;
};

export type CreateUserType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export type UpdateUser = {
  id: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  room?: RoomType;
};
