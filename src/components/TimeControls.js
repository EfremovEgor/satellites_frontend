import React, { useState, useEffect } from 'react';

const TimeControls = () => {
  const [time, setTime] = useState(new Date());
  const [intervalValue, setIntervalValue] = useState(1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date(time.getTime() + 60 * 60 * 1000));

      const currentDate = new Date();
      if (currentDate.getDate() !== time.getDate()) {
        console.log(`A new day has begun at ${currentDate.toLocaleTimeString()}`);
        setTime(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), time.getHours(), time.getMinutes(), time.getSeconds()));
      }
    }, intervalValue);

    return () => clearInterval(intervalId);
  }, [time, intervalValue]);


  const incrementTime = () => {
    setIntervalValue(intervalValue / 2);
  };

  const decrementTime = () => {
    setIntervalValue(intervalValue * 2);
  };

  return (
    <div className="fixed z-10 bottom-0 left-0 right-0 mx-auto mb-5">
      <div className="flex items-center justify-center">
        <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded" onClick={decrementTime}>
          -
        </button>
        <div className="mx-4 text-2xl text-white">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
        </div>
        <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded" onClick={incrementTime}>
          +
        </button>
      </div>
    </div>
  );
};

export default TimeControls;