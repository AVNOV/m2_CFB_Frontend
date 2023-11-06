'use client';
import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import auth from '../slices/auth.slice';

const store = configureStore({
  reducer: {
    auth: auth,
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
