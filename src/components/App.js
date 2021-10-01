import React, {useState}  from 'react';
import Timer from './Timer';
import Buttons from './Buttons';
import '../styles/index.css';

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
      <Timer time={time} />
      <Buttons start={start}
               stop={stop}
               wait={wait}
               reset={reset}
               status={status}
      />
    </div>
  )
}

export default App;
