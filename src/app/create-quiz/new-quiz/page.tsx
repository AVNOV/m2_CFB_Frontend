'use client';

import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <p className="text-4xl mb-8">Félicitation !</p>
      <p className="text-4xl mb-8">Votre quiz est bien crée </p>
      <div className="w-2/5 flex flex-row mt-10 items-center justify-between">
        <Button onClick={() => router.push('/')}>Retourner au menu</Button>
        <Button onClick={() => router.push('/create-quiz')}>
          Créer un nouveau quizz
        </Button>
      </div>
    </div>
  );
}
