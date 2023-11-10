'use client';
import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import auth from '../slices/auth.slice';
import quizSlice from 'slices/quiz.slice';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// };

const store = configureStore({
  reducer: {
    auth: auth,
    quizSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

declare global {
  interface Window {
    Cypress?: CypressWithStore;
  }
}

interface CypressWithStore extends Cypress.Cypress {
  store?: typeof store;
}

if (typeof window !== 'undefined' && window.Cypress) {
  window.Cypress.store = store;
}
