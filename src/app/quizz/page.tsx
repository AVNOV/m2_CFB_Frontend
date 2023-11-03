'use client';

import { useState } from 'react';
import QuizzTemplate from './quizzTemplate';
import Timer from '../components/Timer';

export default function QuizzTemplateHandler() {
  //const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const [question /*, setQuestion*/] = useState<string>(
    'Le glenn est-il beau ?',
  );
  const [answers /*, setAnswers*/] = useState<string[]>([
    'Oui',
    'Non',
    'Incroyable',
    'Damn ugly',
  ]);

  return (
    <div>
      <Timer countdown={30} />
      <QuizzTemplate question={question} answers={answers} />
    </div>
  );
}
