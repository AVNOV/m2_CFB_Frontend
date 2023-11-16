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
    resetQuiz: (state) => {
      state.quiz = <QuizType>{};
      state.currentQuestion = 0;
      state.nbCorrectAnswers = 0;
    },
  },
});

export const {
  updateQuiz,
  updateCurrentQuestion,
  updateNbCorrectAnswers,
  resetQuiz,
} = QuizSlice.actions;
export default QuizSlice.reducer;
