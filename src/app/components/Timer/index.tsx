'use client';

import Lottie from 'lottie-react';
import React from 'react';
import timer from '../../../assets/images/timer.json';

interface TimerCountdownProps {
  timeInSeconds: number;
}

export default function TimerCountdown({ timeInSeconds }: TimerCountdownProps) {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="flex flex-center items-center justify-center absolute top-5">
      <Lottie
        animationData={timer}
        loop={timeInSeconds !== 0}
        className="w-[30%]"
      />
      <p
        className={`text-[30px] ${timeInSeconds <= 5 ? 'text-[#e74c3c]' : ''}`}
      >
        {formatTime(timeInSeconds)}
      </p>
    </div>
  );
}
