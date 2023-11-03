'use client';

import React, { useEffect, useState } from 'react';

interface TimerCountdownProps {
  countdown: number;
}

export default function TimerCountdown({ countdown }: TimerCountdownProps) {
  const [timeInSeconds, setTimeInSeconds] = useState(countdown);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeInSeconds > 0) {
        setTimeInSeconds(timeInSeconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeInSeconds]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="flex flex-center flex-col items-center justify-center">
      <h1>Compte à rebours</h1>
      <div>{formatTime(timeInSeconds)}</div>
    </div>
  );
}
