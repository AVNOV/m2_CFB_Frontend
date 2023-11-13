'use client';

import { useAppSelector } from 'store';
import { useRouter, useSearchParams } from 'next/navigation';
import { LoadingScreen } from '../components/Loading/Loading';
import QuizzTemplate from '../components/QuizTemplate';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { quiz, currentQuestion } = useAppSelector((state) => state.quizSlice);
  const gameId = searchParams.get('gameId');

  if (!quiz.id) {
    router.push('/');
  }

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      {!gameId && <LoadingScreen />}
      {gameId && (
        <QuizzTemplate
          question={quiz?.questions[currentQuestion].title}
          answers={quiz?.questions[currentQuestion].answers}
          currentQuestion={currentQuestion}
          nbQuestions={quiz.questions.length}
          gameId={parseInt(gameId)}
        />
      )}
    </div>
  );
}
