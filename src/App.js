import React, {useState}  from 'react';
import './index.css';

const setTimeFormat = (timeInSeconds) => {
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
  let seconds = timeInSeconds - (hours * 3600) - (minutes * 60);

  const hoursFormat = hours < 10 ? `0${hours}` : hours;
  const minutesFormat =  minutes < 10 ? `0${minutes}` : minutes;
  const secondsFormant = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <>
      <span>{hoursFormat}</span>
      <p className="colon">:</p><span>{minutesFormat}</span>
      <p className="colon">:</p><span>{secondsFormant}</span>
    </>
  );
};

function App() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState();
  const [status, setStatus] = useState(false);
  const [waitClicked, setWaitClicked] = useState(false);
  const [timeoutId, setTimeoutId] = useState();

  const start = () => {
    setIntervalId(setInterval(run, 1000));
    setStatus(true);
  };

  const stop = () => {
    setTime(0);
    clearInterval(intervalId);
    setStatus(false);
  }

  const wait = () => {
    if (waitClicked) {
      setWaitClicked(false);
      clearTimeout(timeoutId);

      clearInterval(intervalId);
      setStatus(false);
    }

    setWaitClicked(true);
    setTimeoutId(setTimeout(() => setWaitClicked(false), 300));
  };

  const reset = () => {
    setTime(0);
    clearInterval(intervalId);
    start();
  }

  const run = () => {
    setTime((prev) => prev + 1);
  };

  return (
    <div className="container">
      <div className="timer">
        {setTimeFormat(time)}
      </div>
      <div className="buttons-container">
        <ul className="buttons">
          <li>
            {
              status ? <button type="button" onClick={stop}>Stop</button> :
              <button type="button" onClick={start}>Start</button>
            }
          </li>
          <li>
            <button type="button" title="Click 2 times in 300ms" onClick={wait}>Wait</button>
          </li>
          <li>
            <button type="button" onClick={reset}>Reset</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
