'use client';
import { useState } from 'react';
import './card.css';
import { getThemes } from 'api/query/theme.query';
import { ThemeType } from 'types/ThemeTypes';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';
import BackButton from '../components/BackButton';
import { getRandomQuiz } from 'api/query/quiz.query';
import { updateQuiz } from 'slices/quiz.slice';
import { useAppDispatch } from 'store';
import { createGame } from 'api/query/game.query';

export default function Page() {
  const router = useRouter();
  const [themes, setThemes] = useState<ThemeType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const dispatch = useAppDispatch();

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
    return null;
  }

  const nextItem = () => {
    setCurrentIndex((currentIndex + 1) % themes.length);
  };

  const prevItem = () => {
    setCurrentIndex((currentIndex - 1 + themes.length) % themes.length);
  };

  const handleValidation = async () => {
    if (selectedItemId) {
      const quiz = await getRandomQuiz(selectedItemId);

      if (!quiz.id) {
        router.push('/');
      } else {
        dispatch(updateQuiz(quiz));
        const game = await createGame(quiz.id);
        router.push(`/game?gameId=${game.id}`);
      }
    }
  };

  return (
    <main className="flex flex-col w-full h-full items-center justify-center">
      <div className="absolute left-0 top-2">
        <BackButton />
      </div>
      <p className="text-4xl mb-8">Choix du thème </p>
      <div className="w-full flex items-center justify-center">
        <button
          className="mr-5 w-10 h-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          onClick={prevItem}
        >
          <div className="mr-0.5">&#9664;</div>
        </button>
        <div className="overflow-hidden">
          <div
            className={`card ${
              selectedItemId === themes[currentIndex].id ? 'card-selected' : ''
            }`}
            onClick={() => {
              setSelectedItemId(themes[currentIndex].id);
            }}
          >
            <div className="card-content">
              <p className="card-title">{themes[currentIndex].name}</p>
            </div>
          </div>
        </div>
        <button
          className="ml-5 w-10 h-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          onClick={nextItem}
        >
          <div className="ml-0.5">&#9654;</div>
        </button>
      </div>
      <Button className="mt-4" onClick={handleValidation}>
        Valider
      </Button>
    </main>
  );
}
