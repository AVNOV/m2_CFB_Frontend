'use client';

import { ChangeEvent } from 'react';
import { CreateAnswerType } from 'types/AnswerTypes';

interface FalseAnswerInputProps {
  index: number;
  setFalseAnswer: (falseAnswer: CreateAnswerType) => void;
  falseAnswer: CreateAnswerType;
  onUpdate: (updatedFalseAnswer: CreateAnswerType, index: number) => void;
}

const FalseAnswerInput: React.FC<FalseAnswerInputProps> = ({
  index,
  onUpdate,
  setFalseAnswer,
  falseAnswer,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedFalseAnswer: CreateAnswerType = {
      ...falseAnswer,
      title: e.target.value,
    };
    setFalseAnswer(updatedFalseAnswer);
    onUpdate(updatedFalseAnswer, index);
  };

  return (
    <div className="flex flex-col items-center">
      <p className={`mt-4 ml-4 mb-2`}>{`Réponse fausse ${index + 1}`}</p>
      <input
        type="text"
        value={falseAnswer.title}
        onChange={handleInputChange}
        className="border-2 focus:outline-orange-400 border-grey rounded-lg py-2 px-3 leading-tight border-solid bg-white text-black ml-4"
      />
    </div>
  );
};

export default FalseAnswerInput;
