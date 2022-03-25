import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isActive) {
      setInterval(() => setTime(time + 1), 1000);
    }
  });

  return (
    <>
      <h1>{time}</h1>
      <button onClick={() => setIsActive(!isActive)}>{isActive ? 'Stop' : 'Start'}</button>
    </>
  )
}


export default Stopwatch;
