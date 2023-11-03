'use client';
import React, { useState } from 'react';

const items = [
  { id: 1, text: 'Premier élément de texte' },
  { id: 2, text: 'Deuxième élément de texte' },
  { id: 3, text: 'Troisième élément de texte' },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative overflow-hidden">
        <div className="w-full h-auto">
          <p className="text-2xl font-bold p-4 text-center">
            {items[currentIndex].text}
          </p>
        </div>
      </div>
      <button
        className="absolute w-10 h-10 top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        onClick={prevItem}
      >
        <div className="mr-0.5">&#9664;</div>
      </button>
      <button
        className="absolute w-10 h-10 top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        onClick={nextItem}
      >
        <div className="ml-0.5">&#9654;</div>
      </button>
    </div>
  );
};

export default Carousel;
