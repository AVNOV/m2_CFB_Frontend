'use client';

import yeaya from '../../assets/images/yeaya.json';
import bad from '../../assets/images/bad.json';
import Lottie from 'lottie-react';
import { useAppSelector } from 'store';

export default function Page() {
  const { nbCorrectAnswers } = useAppSelector((state) => state.quizSlice);

  return (
    <div className="relative h-[85%] w-full flex flex-col justify-center items-center">
      <div className="absolute inset-0">
        <Lottie
          className="w-full h-full"
          animationData={nbCorrectAnswers >= 5 ? yeaya : bad}
          loop={true}
        />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl mb-4">Score</h1>

        <div className="bg-white p-4 rounded shadow-md">
          <h2 className={`text-2xl text-black`}>{nbCorrectAnswers} / 10</h2>
        </div>
      </div>
    </div>
  );
}
