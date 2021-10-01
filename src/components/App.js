import React, {useState, useEffect}  from 'react';
import {Observable} from 'rxjs';
import Timer from './Timer';
import Buttons from './Buttons';
import '../styles/index.css';

function App() {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState(false);
  const [waitClicked, setWaitClicked] = useState(false);
  const [timeoutId, setTimeoutId] = useState();

  const start = () => {
    setStatus(true);
  };

  const stop = () => {
    setStatus(false);
    setTime(0);
  }

  const wait = () => {
    if (waitClicked) {
      setWaitClicked(false);
      clearTimeout(timeoutId);

      setStatus(false);
    }

    setWaitClicked(true);
    setTimeoutId(setTimeout(() => setWaitClicked(false), 300));
  };

  const reset = () => {
    setTime(0);
  }

  useEffect(() => {
    const timer$ = new Observable(observer => {
      setInterval(() => {
        observer.next();
      }, 1000);
    });

    const stopwatch$ = timer$
      .subscribe({
        next: () => {
          if (status) setTime((prev) => prev + 1)
        }
      });

    return (() => {
      stopwatch$.unsubscribe();
    });
  }, [status])

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
