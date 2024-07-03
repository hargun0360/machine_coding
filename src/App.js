import React, { useEffect, useState } from "react";

function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [timerId, setTimerId] = useState(""); // helping pause

  const handleInput = (event) => {
    let value = parseInt(event.target.value);
    console.log(value, event.target.id);
    if (event.target.id === "hour") {
      setHour(value);
    } else if (event.target.id === "minutes") {
      setMinute(value);
    } else {
      setSecond(value);
    }
  };

  const handleStart = () => {
    setIsStart(true);
  };

  const runTimer = (hh, mm, ss, tid) => {
    if (ss > 0) {
      setSecond((sec) => sec - 1);
    } else if (ss == 0 && mm > 0) {
      setSecond(59);
      setMinute((min) => min - 1);
    } else if (hh > 0) {
      setSecond(59);
      setMinute(59);
      setHour((hour) => hour - 1);
    }

    if (ss == 0 && mm == 0 && hh == 0) {
      setIsStart(false);
      setSecond(0);
      setMinute(0);
      setHour(0);
      clearInterval(tid);
      return;
    }
  };

  const handlePause = () => {
    clearInterval(timerId);
  };

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(hour, minute, second, tid);
      }, 1000);
      setTimerId(tid);
    }
    return () => {
      clearTimeout(tid);
    };
  }, [isStart, hour, minute, second]);

  return (
    <div className="App">
      {!isStart && (
        <div className="input_timer">
          <h1>Count Down Timer</h1>
          <div className="inputs">
            <input
              id="hour"
              value={hour}
              placeholder="HH"
              type="number"
              onChange={handleInput}
            />
            <input
              id="minutes"
              value={minute}
              placeholder="MM"
              type="number"
              onChange={handleInput}
            />
            <input
              id="second"
              value={second}
              placeholder="SS"
              type="number"
              onChange={handleInput}
            />
            <button onClick={handleStart}>Start</button>
          </div>
        </div>
      )}
      {isStart && (
        <div className="show_timer">
          <span>{hour >= 10 ? hour : `0${hour}`}</span> :
          <span>{minute >= 10 ? minute : `0${minute}`}</span> :
          <span>{second >= 10 ? second : `0${second}`}</span>
          <div>
            <button onClick={handlePause}>pause</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
