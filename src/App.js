import React from "react";
import { useState } from "react";
import AppTemplate from "./components/templates/AppTemplate";

function App() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);

  // const timeCounter = (minutes, seconds) => {
  //   let timeLeftMinutes = minutes;
  //   let timeLeftSeconds = seconds;

  //   let countdownSeconds = setInterval(() => {
  //     timeLeftSeconds--;
  //     setSeconds(timeLeftSeconds);
  //     if (timeLeftSeconds === 0) {
  //       setSeconds(59);
  //       clearInterval(countdownSeconds);
  //     }
  //     if (timeLeftSeconds === 0) timeLeftMinutes--;
  //     setMinutes(timeLeftMinutes);
  //   }, 1000);
  // };

  const prototypeCounter = (minutes, seconds) => {
    let timeLeft = seconds;
    let minutesLeft = minutes;

    let countdown = setInterval(() => {
      timeLeft--;
      setSeconds(timeLeft);
      if (timeLeft === 0) {
        setMinutes(minutesLeft - 1);
        timeLeft = 60;
        if (timeLeft === 0 && minutesLeft === 0) clearInterval(countdown);
      }
    }, 1000);
  };

  return (
    <AppTemplate
      onMinutesChange={setMinutes}
      onSecondsChange={setSeconds}
      minutes={minutes}
      seconds={seconds}
      onGoClick={() => prototypeCounter(minutes, seconds)}
    />
  );
}

export default App;
// clearInterval(countdown)
