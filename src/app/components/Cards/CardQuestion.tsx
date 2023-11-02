'use client';

import React from 'react';

interface CardQuestionProps {
  text: string;
}

const CardQuestion: React.FC<CardQuestionProps> = ({ text }) => {
  return (
    <div className="p-4 bg-blue-100 shadow-md rounded-lg">
      <label className="flex items-center">
        <span className="text-orange-500 text-lg">{text}</span>
      </label>
    </div>
  );
};

export default CardQuestion;
