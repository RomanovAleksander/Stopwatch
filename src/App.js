import React  from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      <div className="timer">
        <span id="hour">00</span>
        <p className="colon">:</p><span id="minute">00</span>
        <p className="colon">:</p><span id="second">00</span>
      </div>
      <div className="buttonContainer">
        <ul className="buttons">
          <li>
            <button type="button" name="start">Start</button>
          </li>
          <li>
            <button type="button" name="stop">Pause</button>
          </li>
          <li>
            <button type="button" name="pause">Reset</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
