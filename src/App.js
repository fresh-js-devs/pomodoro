import React from "react";
import { useState } from "react";
import AppTemplate from "./components/templates/AppTemplate";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const prototypeCounter = (minutes, seconds) => {
    let timeLeft = seconds;
    let minutesLeft = minutes;

    let countdown = setInterval(() => {
      timeLeft--;
      setSeconds(timeLeft);
      if (timeLeft === 0) {
        if (timeLeft === 0 && minutesLeft === 0) clearInterval(countdown);
        setMinutes(minutesLeft - 1);
        timeLeft = 60;
      }
    }, 1000);
  };

  const zerosDisabledButton = minutes === 0 && seconds === 0;

  return (
    <AppTemplate
      onMinutesChange={setMinutes}
      onSecondsChange={setSeconds}
      minutes={minutes}
      seconds={seconds}
      onGoClick={() => prototypeCounter(minutes, seconds)}
      zerosDisabledButton={zerosDisabledButton}
    />
  );
}

export default App;
// clearInterval(countdown)
