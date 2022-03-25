import React, { useState } from 'react';
import './App.css';
import Clock from './components/Clock';
import Stopwatch from './components/Stopwatch';

function App() {
  const [clockType, setClockType] = useState(1);

  const changeClock = () => {
    if (clockType === 1) {
      setClockType(0);
    } else {
      setClockType(1);
    }
    console.log(clockType);
  }

  return (
    <div className="App">
      {clockType ? <Clock /> : <Stopwatch />}
      <button onClick={changeClock}> Change clock </button>
    </div>
  );
}

export default App;
