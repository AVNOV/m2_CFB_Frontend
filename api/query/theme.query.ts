import API from 'api/API';
import { ThemeType } from 'types/ThemeTypes';

export const getThemes = async (): Promise<ThemeType[]> => {
  const { data } = await API.get('/themes');
  return data;
};
