'use client';
import { createSlice } from '@reduxjs/toolkit';
import { QuizType } from 'types/QuizTypes';

export const QuizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quiz: <QuizType>{},
    currentQuestion: 0,
    nbCorrectAnswers: 0,
  },
  reducers: {
    updateQuiz: (state, action) => {
      state.quiz = action.payload;
    },
    updateCurrentQuestion: (state) => {
      state.currentQuestion += 1;
    },
    updateNbCorrectAnswers: (state) => {
      state.nbCorrectAnswers += 1;
    },
  },
});

export const { updateQuiz, updateCurrentQuestion, updateNbCorrectAnswers } =
  QuizSlice.actions;
export default QuizSlice.reducer;
