import React from 'react';

const Timer = ({ time }) => {
  const changeTimeFormat = (timeInSeconds) => {
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

  return (
    <div className="timer">
      {changeTimeFormat(time)}
    </div>
  )
};

export default Timer;
