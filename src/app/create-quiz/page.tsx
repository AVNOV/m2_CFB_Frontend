'use client';
import { useState } from 'react';

import { getThemes } from 'api/query/theme.query';
import { ThemeType } from 'types/ThemeTypes';
import { CreateQuizType, UpdateQuizType } from 'types/QuizTypes';
import arrow from '@/assets/icons/arrow.svg';
import { CreateQuestionType } from 'types/QuestionTypes';
import Button from '../components/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createQuiz } from 'api/query/quiz.query';
import { CreateAnswerType } from 'types/AnswerTypes';
import { createQuestion } from 'api/query/question.query';
import { createAnswer } from 'api/query/answer.query';
import FalseAnswerInput from './false-answer.input';

export default function Page() {
  const router = useRouter();
  const [themes, setThemes] = useState<ThemeType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const newQuizData: CreateQuizType = {
    title: '',
    difficulty: 0,
    themeId: 0,
    userId: 0,
  };

  const [question, setQuestion] = useState<CreateQuestionType>({
    title: '',
    quizId: 0,
  });

  const [quizData, setQuizData] = useState<UpdateQuizType>({
    id: 0,
    themeId: 0,
    title: '',
  });

  const [answerTrue, setAnswerTrue] = useState<CreateAnswerType>({
    title: '',
    questionId: 0,
    isCorrect: true,
  });

  const [falseAnswers, setFalseAnswers] = useState([
    { title: '', questionId: 0, isCorrect: false },
    { title: '', questionId: 0, isCorrect: false },
    { title: '', questionId: 0, isCorrect: false },
  ]);

  const fetchThemesData = async () => {
    try {
      const themesData = await getThemes();
      setThemes(themesData);
    } catch (error) {
      console.error('Erreur lors de la récupération des thèmes', error);
    }
  };

  const newQuiz = async () => {
    try {
      await createQuiz(newQuizData).then((res) => {
        setQuizData({
          id: res.id,
          themeId: res.themeId,
          title: res.title,
        });
        setQuestion({
          ...question,
          quizId: res.id,
        });
      });
    } catch (error) {
      console.error(
        'Erreur lors de la création/récupération du nouveau quiz',
        error,
      );
    }
  };

  const newQuestion = async () => {
    try {
      const createdQuestion = await createQuestion(question);
      setAnswerTrue({
        ...answerTrue,
        questionId: createdQuestion.id,
      });
      const answers = [
        { ...answerTrue },
        { ...falseAnswers[0] },
        { ...falseAnswers[1] },
        { ...falseAnswers[2] },
      ];
      answers.forEach((answer) => {
        answer.questionId = createdQuestion.id;
      });
      await Promise.all(answers.map((answer) => createAnswer(answer)));
    } catch (error) {
      console.error('Erreur lors de la création de la question', error);
    }
  };

  if (themes.length === 0) {
    fetchThemesData();
  }

  if (quizData.id === 0) {
    newQuiz();
  }

  const handleQuizTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizData({ ...quizData, title: e.target.value });
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const themeId = parseInt(e.target.value, 10);
    setQuizData({ ...quizData, themeId });
  };

  const handleQuestionTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setQuestion({ ...question, title: e.target.value });
  };

  const handleFalseAnswerUpdate = (
    updatedFalseAnswer: CreateAnswerType,
    index: number,
  ) => {
    const updatedFalseAnswers = [...falseAnswers];
    updatedFalseAnswers[index] = updatedFalseAnswer;
    setFalseAnswers(updatedFalseAnswers);
  };

  const handleValidateQuiz = () => {
    console.log(quizData);
  };

  return (
    <div className="h-full w-full flex flex-col pt-5">
      <div className="flex cursor-pointer" onClick={() => router.push('/')}>
        <Image
          className="w-4 object-contain ml-2 rotate-90"
          src={arrow}
          alt=""
        />
      </div>
      <div className="flex flex-col p-4 w-full h-full pt-10 items-center">
        <p className="text-4xl mb-8">Créez votre quiz !</p>

        <label htmlFor="quizTitle" className="mb-2">
          Titre du quiz
        </label>
        <input
          disabled={currentQuestionIndex > 0}
          type="text"
          id="quizTitle"
          value={quizData.title}
          onChange={handleQuizTitleChange}
          className={`border-2 focus:outline-orange-400 border-grey rounded-lg py-2 px-3 leading-tight border-solid bg-white text-black ${
            currentQuestionIndex > 0 ? 'opacity-50 bg-gray-50' : ''
          }}`}
        />

        <label htmlFor="theme" className="mt-5 mb-2">
          Thème
        </label>
        <select
          id="theme"
          disabled={currentQuestionIndex > 0}
          value={quizData.themeId}
          onChange={handleThemeChange}
          className={`border-2 focus:outline-orange-400 border-grey rounded-lg py-2 px-3 leading-tight border-solid bg-white text-black ${
            currentQuestionIndex > 0 ? 'opacity-50 bg-gray-50' : ''
          }}`}
        >
          {themes.map((theme) => (
            <option key={theme.id} value={theme.id}>
              <p className="text-black">{theme.name}</p>
            </option>
          ))}
        </select>

        <div className="w-full h-full flex flex-col items-center">
          <p className="mt-10 mb-2">Questions {currentQuestionIndex + 1}</p>

          <input
            onChange={handleQuestionTitleChange}
            value={question?.title}
            type="text"
            className="border-2 focus:outline-orange-400 border-grey rounded-lg py-2 px-3 leading-tight border-solid bg-white text-black w-1/4"
          />
          <div className="flex flex-row">
            <div className="flex flex-col items-center">
              <p className="mt-4 mb-2">Réponse juste</p>
              <input
                type="text"
                className="border-2 focus:outline-orange-400 border-grey rounded-lg py-2 px-3 leading-tight border-solid bg-white text-black"
              />
            </div>
            {falseAnswers.map((_, index) => (
              <FalseAnswerInput
                key={index}
                index={index}
                onUpdate={handleFalseAnswerUpdate}
              />
            ))}
          </div>
          <div className="my-10">{`${currentQuestionIndex + 1}/10`}</div>
          <div className="w-1/2 flex flex-col items-center">
            {currentQuestionIndex < 9 && (
              <Button
                className=""
                onClick={() => {
                  setCurrentQuestionIndex(currentQuestionIndex + 1);
                  newQuestion();
                }}
              >
                Ajouter la question
              </Button>
            )}
            <Button
              className="mt-5"
              onClick={() => {
                handleValidateQuiz();
                router.push('/create-quiz/new-quiz');
              }}
            >
              Valider le quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
