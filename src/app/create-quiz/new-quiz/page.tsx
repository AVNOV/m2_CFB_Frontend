'use client';

import Button from '@/app/components/Button';
import Lottie from 'lottie-react';
import congrat from '../../../assets/images/congrat.json';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full h-full items-center justify-center relative">
      <p className="text-4xl mb-2  z-1">Félicitation !</p>
      <p className="text-4xl mb-2 z-1">Un Quiz de plus dans la quizothèque !</p>
      <Lottie
        className="z-0 w-4/12"
        size={10}
        animationData={congrat}
        loop={false}
      />
      <div className="w-2/5 flex flex-row mt-10 items-center justify-between">
        <Button onClick={() => router.push('/')}>Retourner au menu</Button>
        <Button onClick={() => router.push('/create-quiz')}>
          Créer un nouveau quiz
        </Button>
      </div>
    </div>
  );
}
