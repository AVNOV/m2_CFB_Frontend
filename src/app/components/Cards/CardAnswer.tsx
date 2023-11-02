'use client';

import React from 'react';

interface CardAnswerProps {
  text: string;
  checked: boolean;
  onChange: (newChecked: boolean) => void;
}

const CardAnswer: React.FC<CardAnswerProps> = ({ text, checked, onChange }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 form-checkbox h-5 w-5 text-indigo-600"
          checked={checked}
          onChange={() => onChange(!checked)}
        />
        <span className="text-gray-800">{text}</span>
      </label>
    </div>
  );
};

export default CardAnswer;
