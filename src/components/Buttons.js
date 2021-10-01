import React from 'react';

const Buttons = ({ start, stop, wait, reset, status }) => {
  return (
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
  )
};

export default Buttons;
