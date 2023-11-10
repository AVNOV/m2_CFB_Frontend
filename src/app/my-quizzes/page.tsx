'use client';

import { getQuizzes } from 'api/query/quiz.query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import arrow from '@/assets/icons/arrow.svg';
import { QuizType } from 'types/QuizTypes';

export default function Page() {
  const router = useRouter();
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);

  const fetchQuizzesData = async () => {
    try {
      const quizzesData = await getQuizzes();
      setQuizzes(quizzesData);
    } catch (error) {
      console.error('Erreur lors de la récupération des quiz', error);
    }
  };

  if (quizzes.length === 0) {
    fetchQuizzesData();
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
      <div className="flex flex-col w-full h-1/2 items-center justify-center">
        <p className="text-4xl">Mes Quiz</p>
        <div className="flex flex-col h-1/2 items-center justify-center"></div>
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
  );
}
