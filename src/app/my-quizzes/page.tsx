'use client';

import { getQuizzes } from 'api/query/quiz.query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import arrow from '@/assets/icons/arrow.svg';
import { QuizType } from 'types/QuizTypes';

export default function Page() {
  const router = useRouter();
  const [fetch, isFetching] = useState(false);
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);

  const fetchQuizzesData = async () => {
    try {
      const quizzesData = await getQuizzes();
      setQuizzes(quizzesData);
    } catch (error) {
      console.error('Erreur lors de la récupération des quiz', error);
    }
  };

  if (quizzes.length === 0 && !fetch) {
    fetchQuizzesData();
    isFetching(true);
  }

  return (
    <div className="h-full w-full flex flex-col pt-5">
      <div className="flex cursor-pointer" onClick={() => router.push('/')}>
        <Image
          className="w-4 object-contain ml-2 rotate-90"
          src={arrow}
          alt=""
        />
      </div>
      <div className="flex flex-col my-auto justify-center items-center">
        <h1 className="text-5xl mb-10">Mes Quiz</h1>
        <div className="flex flex-col items-center space-y-4 w-1/3">
          {quizzes.length === 0 ? (
            <p className="text-2xl mb-8">
              Vous n&apos;avez pas encore créé de quiz
            </p>
          ) : (
            quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="flex flex-col w-full h-full items-center justify-center"
              >
                <p className="text-2xl mb-8">{quiz.title}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
