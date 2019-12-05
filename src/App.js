import React from "react";
import { useState, useEffect } from "react";
import AppTemplate from "./components/templates/AppTemplate";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [workLoop, setWorkLoop] = useState(0);
  const [breakLoop, setBreakLoop] = useState(0);
  const [pause, setPause] = useState(false);

  //useEffect for Work Time
  useEffect(() => {
    let secondsLeft = seconds;
    let minutesLeft = minutes;
    let countdown = null;
    let pauseCountdown = null;

    if (isActive) {
      setPause(false);
      countdown = setInterval(() => {
        if (secondsLeft === 0 && isActive) {
          setMinutes(minutesLeft - 1);
          secondsLeft = 60;
        }
        secondsLeft--;
        setSeconds(secondsLeft);
        if (secondsLeft === 0 && minutesLeft === 0) {
          setIsActive(false);
          setPause(true);
          setWorkLoop(workLoop + 1);
        }
        if (isActive === false) clearInterval(countdown);
      }, 1000);
    }

    // if (pause) {
    //   setIsActive(false);
    //   setMinutes(4);
    //   setSeconds(59);
    //   pauseCountdown = setInterval(() => {
    //     if (secondsLeft === 0 && pause) {
    //       setMinutes(minutesLeft - 1);
    //       secondsLeft = 60;
    //     }
    //     secondsLeft--;
    //     setSeconds(secondsLeft);
    //     if (secondsLeft === 0 && minutesLeft === 0) {
    //       setIsActive(true);
    //       setPause(pause);
    //       setWorkLoop(breakLoop + 1);
    //     }
    //     if (pause === false) clearInterval(pauseCountdown);
    //   }, 1000);
    // }

    return () => {
      clearInterval(countdown);
    };
  }, [minutes, seconds, isActive, workLoop, pause, breakLoop]);

  const prototypeCounter = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setPause(false);
    setMinutes(0);
    setSeconds(0);
    setWorkLoop(0);
    setBreakLoop(0);
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
      workLoop={workLoop}
      breakLoop={breakLoop}
    />
  );
}

export default App;
