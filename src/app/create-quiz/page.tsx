'use client';
import { useState } from 'react';

import { getThemes } from 'api/query/theme.query';
import { ThemeType } from 'types/ThemeTypes';
import { CreateQuizType } from 'types/QuizTypes';
import arrow from '@/assets/icons/arrow.svg';
import { CreateQuestionType } from 'types/QuestionTypes';
import Button from '../components/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [themes, setThemes] = useState<ThemeType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const router = useRouter();
  //   const [questions, setQuestions] = useState<CreateQuestionType[]>([]);
  const [quizData, setQuizData] = useState<CreateQuizType>({
    title: '',
    difficulty: 0,
    themeId: 0,
    userId: 0,
    questions: [],
  });

  const fetchThemesData = async () => {
    try {
      const themesData = await getThemes();
      setThemes(themesData);
    } catch (error) {
      console.error('Erreur lors de la récupération des thèmes', error);
    }
  };

  if (themes.length === 0) {
    fetchThemesData();
  }

  const handleQuizTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizData({ ...quizData, title: e.target.value });
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const themeId = parseInt(e.target.value, 10);
    setQuizData({ ...quizData, themeId });
  };

  const addQuestion = () => {
    const newQuestion: CreateQuestionType = {
      title: '',
      quizId: 0,
      answers: [],
    };
    setQuizData({
      ...quizData,
      questions: [...quizData.questions, newQuestion],
    });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
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
          type="text"
          id="quizTitle"
          value={quizData.title}
          onChange={handleQuizTitleChange}
          className="border-2 focus:outline-orange-400 border-grey rounded-lg py-2 px-3 leading-tight border-solid bg-white text-black"
        />

        <label htmlFor="theme" className="mt-5 mb-2">
          Thème
        </label>
        <select
          id="theme"
          value={quizData.themeId}
          onChange={handleThemeChange}
          className="border-2 focus:outline-orange-400 border-grey rounded-lg py-2 px-3 leading-tight border-solid bg-white text-black"
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
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className={`mt-4 ml-4 mb-2`}>Réponse fausse {index + 1}</p>
                <input
                  type="text"
                  className="border-2 focus:outline-orange-400 border-grey rounded-lg py-2 px-3 leading-tight border-solid bg-white text-black ml-4"
                />
              </div>
            ))}
          </div>
          <div className="my-10">{`${currentQuestionIndex + 1}/10`}</div>
          <div className="w-1/2 flex flex-col items-center">
            {currentQuestionIndex < 9 && (
              <Button className="" onClick={addQuestion}>
                Ajouter la question
              </Button>
            )}
            <Button
              className="mt-5"
              onClick={() => router.push('/create-quiz/new-quiz')}
            >
              Valider le quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
