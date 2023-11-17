import API from '../API';
import { RoomType } from 'types/RoomTypes';

export const createRoom = async (): Promise<RoomType> => {
  const { data } = await API.post('/rooms');
  return data;
};

export const addUser = async (code: string): Promise<RoomType> => {
  const { data } = await API.post(`/rooms/adduser/${code}`);
  return data;
};

export const addGame = async (themeId: number): Promise<RoomType> => {
  const { data } = await API.post(`/rooms/addgame/${themeId}`);
  return data;
};
