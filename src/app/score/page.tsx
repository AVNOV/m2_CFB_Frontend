'use client';

import { useSelector } from 'react-redux';
import yeaya from '../../assets/images/yeaya.json';
import Lottie from 'lottie-react';

// Suppose you have a selector to get the player scores from your Redux store
const selectPlayerScores = (state) => state.quiz.nbCorrectAnswers;

export default function Page() {
  // Retrieve player scores from the Redux store
  const playerScores = useSelector(selectPlayerScores);

  return (
    <div className="relative h-[85%] w-full flex flex-col justify-center items-center">
      <div className="absolute inset-0">
        <Lottie className="w-full h-full" animationData={yeaya} loop={true} />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl mb-4">Score Board</h1>

        {/* Card displaying player scores */}
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-2xl mb-2">Player Scores</h2>
          {playerScores.map((player, index) => (
            <div key={index} className="mb-2">
              <span className="font-bold">{player.name}:</span> {player.score}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}