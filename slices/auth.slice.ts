'use client';
import { createSlice } from '@reduxjs/toolkit';
import { RoomType } from 'types/RoomTypes';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
    user: {
      id: -1,
      firstname: '',
      lastname: '',
      email: '',
      created_at: '',
      updated_at: '',
      room: {} as RoomType,
    },
    access_token: '',
  },
  reducers: {
    update: (state, action) => {
      const newUser = {
        ...action.payload,
        id: state.user.id,
        created_at: state.user.created_at,
        updated_at: state.user.updated_at,
      };
      state.user = newUser;
      localStorage.setItem('user', JSON.stringify(newUser));
    },
    login: (state, action) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
      state.isLogged = true;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('access_token', action.payload.access_token);
    },
    logout: (state) => {
      state.isLogged = false;
      state.user = {
        id: -1,
        firstname: '',
        lastname: '',
        email: '',
        created_at: '',
        updated_at: '',
        room: {} as RoomType,
      };
      state.access_token = '';
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
    },
  },
});

export const { update, login, logout } = authSlice.actions;
export default authSlice.reducer;
