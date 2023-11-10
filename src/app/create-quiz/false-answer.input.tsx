'use client';
import { useState, ChangeEvent } from 'react';
import { CreateAnswerType } from 'types/AnswerTypes';

interface FalseAnswerInputProps {
  index: number;
  onUpdate: (updatedFalseAnswer: CreateAnswerType, index: number) => void;
}

const FalseAnswerInput: React.FC<FalseAnswerInputProps> = ({
  index,
  onUpdate,
}) => {
  const [falseAnswer, setFalseAnswer] = useState<CreateAnswerType>({
    title: '',
    questionId: 0,
    rightAnswer: false,
  });

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
