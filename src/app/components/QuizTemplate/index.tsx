'use client';

import { useEffect, useState } from 'react';
import Button from '../Button';
import CardAnswer from '../Cards/CardAnswer';
import CardQuestion from '../Cards/CardQuestion';
import { AnswerType } from 'types/AnswerTypes';
import { useAppDispatch, useAppSelector } from 'store';
import {
  updateCurrentQuestion,
  updateNbCorrectAnswers,
} from 'slices/quiz.slice';
import { updateGame } from 'api/query/game.query';
import Timer from '../Timer';
import { useRouter } from 'next/navigation';

interface TemplateProps {
  question: string;
  answers: AnswerType[];
  nbQuestions: number;
  currentQuestion: number;
  gameId: number;
}

export default function QuizzTemplate(TemplateProps: TemplateProps) {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const { question, answers, currentQuestion, nbQuestions, gameId } =
    TemplateProps;
  const [isValidate, setIsValidate] = useState(false);
  const dispatch = useAppDispatch();
  const { nbCorrectAnswers } = useAppSelector((state) => state.quizSlice);
  const [timeInSeconds, setTimeInSeconds] = useState(30);

  const handleCardChange = (id: string) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  const validate = async (rightAnswer = false) => {
    setIsValidate(true);

    if (rightAnswer) {
      dispatch(updateNbCorrectAnswers());
    }
    await updateGame(
      gameId,
      nbCorrectAnswers + (rightAnswer ? 1 : 0),
      currentQuestion + 1,
    );

    if (currentQuestion + 1 === 10) router.push('/score');

    setTimeout(() => {
      setTimeInSeconds(30);
      dispatch(updateCurrentQuestion());
      setIsValidate(false);
      setSelectedCard(null);
    }, 2000);
  };

  const handleValidate = async () => {
    if (selectedCard !== null) {
      const answerId = parseInt(selectedCard);
      const answer = answers.find((answer) => answer.id === answerId);

      await validate(answer?.rightAnswer);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeInSeconds > 0) {
        setTimeInSeconds(timeInSeconds - 1);
      } else {
        validate();
        clearInterval(interval);
      }
    }, 1000);

    if (isValidate) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeInSeconds, isValidate]);

  return (
    <div className="flex flex-center items-center justify-center flex-col w-[100vw] h-[100vh]">
      <Timer timeInSeconds={timeInSeconds} />
      <p className="text-[20px] mb-[20px]">
        Question {currentQuestion + 1}/{nbQuestions}
      </p>
      <div className="pb-[10vh]">
        <CardQuestion text={question} />
      </div>
      <div className="flex items-center justify-center">
        <div className="pl-[20px]">
          <CardAnswer
            rightAnswer={answers[0].rightAnswer}
            text={answers[0].title}
            checked={selectedCard === answers[0].id.toString()}
            onChange={() => handleCardChange(answers[0].id.toString())}
            isValidate={isValidate}
          />
        </div>
        <div className="pl-[20px]">
          <CardAnswer
            rightAnswer={answers[1].rightAnswer}
            text={answers[1].title}
            checked={selectedCard === answers[1].id.toString()}
            onChange={() => handleCardChange(answers[1].id.toString())}
            isValidate={isValidate}
          />
        </div>
        <div className="pl-[20px]">
          <CardAnswer
            rightAnswer={answers[2].rightAnswer}
            text={answers[2].title}
            checked={selectedCard === answers[2].id.toString()}
            onChange={() => handleCardChange(answers[2].id.toString())}
            isValidate={isValidate}
          />
        </div>
        <div className="pl-[20px]">
          <CardAnswer
            rightAnswer={answers[3].rightAnswer}
            text={answers[3].title}
            checked={selectedCard === answers[3].id.toString()}
            onChange={() => handleCardChange(answers[3].id.toString())}
            isValidate={isValidate}
          />
        </div>
      </div>
      <div className="mt-[10vh]">
        <Button
          onClick={!isValidate ? handleValidate : undefined}
          disabled={isValidate}
        >
          Valider
        </Button>
      </div>
    </div>
  );
}
