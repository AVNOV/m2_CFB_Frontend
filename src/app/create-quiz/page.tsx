'use client';

import { useState } from 'react';

export default function Page() {
  const [quizName, setQuizName] = useState('');
  const [quizTheme, setQuizTheme] = useState('');
  const [questions, setQuestions] = useState(
    Array(10).fill({
      question: '',
      answers: ['', '', '', ''],
      correctAnswer: 0,
    }),
  );

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (questionIndex, answerIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers[answerIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].correctAnswer = parseInt(value, 10);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="flex flex-col w-full h-full pt-10 items-center">
      <p className="text-4xl mb-8">Créez votre quiz !</p>
      <div className="flex flex-col w-full h-full items-start">
        <div className="mb-4">
          <label>Nom du quiz:</label>
          <input
            type="text"
            value={quizName}
            onChange={(e) => setQuizName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label>Thème du quiz:</label>
          <input
            type="text"
            value={quizTheme}
            onChange={(e) => setQuizTheme(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <p>Questions:</p>
          {questions.map((q, index) => (
            <div key={index} className="mb-4">
              <p>Question {index + 1}:</p>
              <input
                type="text"
                value={q.question}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
              />

              <p>Réponses:</p>
              {q.answers.map((answer, answerIndex) => (
                <div key={answerIndex}>
                  <input
                    className="mb-2"
                    type="text"
                    value={answer}
                    onChange={(e) =>
                      handleAnswerChange(index, answerIndex, e.target.value)
                    }
                  />
                  <label>
                    <input
                      type="radio"
                      value={answerIndex}
                      checked={q.correctAnswer === answerIndex}
                      onChange={() =>
                        handleCorrectAnswerChange(index, answerIndex)
                      }
                    />
                    Correct
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
