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
  const [status, setStatus] = useState(false)

  const start = () => {
    run();
    setIntervalId(setInterval(run, 1000));
    setStatus(true);
  };

  const stop = () => {
    setTime(0);
    clearInterval(intervalId);
    setStatus(false);
  }

  const wait = () => {
    clearInterval(intervalId);
    setStatus(false);
  };

  const reset = () => {
    setTime(0);
  }

  const run = () => {
    setTime((prev) => prev + 1);
  };

  return (
    <div className="container">
      <div className="timer">
        {setTimeFormat(time)}
      </div>
      <div className="buttonContainer">
        <ul className="buttons">
          <li>
            {
              status ? <button type="button" name="stop" onClick={stop}>Stop</button> :
              <button type="button" name="start" onClick={start}>Start</button>
            }
          </li>
          <li>
            <button type="button" name="wait" onClick={wait}>Wait</button>
          </li>
          <li>
            <button type="button" name="reset" onClick={reset}>Reset</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
