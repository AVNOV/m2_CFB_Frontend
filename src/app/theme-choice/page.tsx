'use client';
import { useState } from 'react';
import './card.css';

const items = [
  { id: 1, text: 'Thème 1' },
  { id: 2, text: 'Thème 2' },
  { id: 3, text: 'Thème 3' },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const nextItem = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleValidation = () => {
    if (selectedItemId === null) {
      return;
    }
    console.log('ID theme', selectedItemId);
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <button
          className="mr-5 w-10 h-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          onClick={prevItem}
        >
          <div className="mr-0.5">&#9664;</div>
        </button>
        <div className="overflow-hidden">
          <div
            className="card"
            onClick={() => {
              setSelectedItemId(items[currentIndex].id);
              handleValidation();
            }}
          >
            <div className="card-content">
              <p className="card-title">{items[currentIndex].text}</p>
            </div>
          </div>
        </div>
        <button
          className="ml-5 w-10 h-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          onClick={nextItem}
        >
          <div className="ml-0.5">&#9654;</div>
        </button>
      </div>
      {/* <Button className="mt-4" onClick={handleValidation}>
        Valider
      </Button> */}
    </div>
  );
}
