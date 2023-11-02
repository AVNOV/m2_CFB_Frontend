'use client';

import { useState } from 'react';
import Button from '../components/Button';
import CardAnswer from '../components/Cards/CardAnswer';
import CardQuestion from '../components/Cards/CardQuestion';
import QuizzTemplate from './quizzTemplate';

export default function QuizzTemplateHandler() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const [question, setQuestion] = useState<string>("Le glenn est-il beau ?");
  const [answers, setAnswers] = useState<string[]>(["Oui", "Non", "Incroyable", "Damn ugly"]);

  return (
    <div>
      <QuizzTemplate question={question} answers={answers} />
    </div>
  );
}