'use client';

import React from 'react';

interface CardAnswerProps {
  text: string;
  checked: boolean;
  onChange: (newChecked: boolean) => void;
  rightAnswer: boolean;
  isValidate: boolean;
}

const CardAnswer: React.FC<CardAnswerProps> = ({
  text,
  checked,
  onChange,
  rightAnswer,
  isValidate,
}) => {
  return (
    <div
      className={`p-4 shadow-md rounded-lg ${
        isValidate
          ? rightAnswer
            ? 'bg-[#2ecc71]'
            : 'bg-[#e74c3c]'
          : 'bg-white'
      }`}
    >
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 form-checkbox h-5 w-5 text-indigo-600"
          checked={checked}
          onChange={() => onChange(!checked)}
          disabled={isValidate}
        />
        <span className={isValidate ? 'text-white' : `text-gray-800`}>
          {text}
        </span>
      </label>
    </div>
  );
};

export default CardAnswer;
