import React from "react";
import { useState, useEffect } from "react";
import AppTemplate from "./components/templates/AppTemplate";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let secondsLeft = seconds;
    let minutesLeft = minutes;
    let countdown;

    if (isActive) {
      countdown = setInterval(() => {
        if (secondsLeft === 0) {
          if (secondsLeft === 0 && minutesLeft === 0) clearInterval(countdown);
          setMinutes(minutesLeft - 1);
          secondsLeft = 60;
        }
        secondsLeft--;
        setSeconds(secondsLeft);
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [minutes, seconds, isActive]);

  const prototypeCounter = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(0);
    setSeconds(0);
  };

  const zerosDisabledButton =
    (minutes === 0 && seconds === 0) || minutes === null || seconds === null;

  return (
    <AppTemplate
      onMinutesChange={setMinutes}
      onSecondsChange={setSeconds}
      minutes={minutes}
      seconds={seconds}
      onGoClick={() => prototypeCounter(minutes, seconds)}
      zerosDisabledButton={zerosDisabledButton}
      onStopClick={() => resetTimer()}
    />
  );
}

export default App;
// clearInterval(countdown)
