import React from "react";
import { useState, useEffect } from "react";
import AppTemplate from "./components/templates/AppTemplate";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [workLoop, setWorkLoop] = useState(0);
  const [breakLoop, setBreakLoop] = useState(0);
  const [breakTimeWorkTime, setBreakTimeWorkTime] = useState("Ready to roll?");
  const [loopCounter, setLoopCounter] = useState(0);

  useEffect(() => {
    let secondsLeft = seconds;
    let minutesLeft = minutes;
    let loopCountertemp = loopCounter;
    let breakCounter = breakLoop;
    let countdown = null;

    const isOdd = num => num % 2;

    if (isActive) {
      countdown = setInterval(() => {
        if (secondsLeft === 0 && minutesLeft > 0) {
          setMinutes(minutesLeft - 1);
          secondsLeft = 60;
        }
        if (secondsLeft > 0) {
          secondsLeft--;
          setSeconds(secondsLeft);
        }

        if (secondsLeft === 0 && minutesLeft === 0) {
          loopCountertemp++;
          setLoopCounter(loopCountertemp);
          if (isOdd(loopCounter)) {
            setBreakLoop(breakLoop + 1);
            breakCounter++;
            console.log("breakloop: " + breakLoop);
            if (breakCounter % 4 === 0) {
              setBreakTimeWorkTime("Long Break!");
              setMinutes(0);
              setSeconds(10);
            } else {
              setBreakTimeWorkTime("Short Break!");
              setMinutes(0);
              setSeconds(5);
            }
          }
          if (!isOdd(loopCounter)) {
            setMinutes(0);
            setSeconds(2);
            setBreakTimeWorkTime("Work Time!");
            setWorkLoop(workLoop + 1);
          }
        }
        if (isActive === false) clearInterval(countdown);
      }, 1000);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [minutes, seconds, isActive, loopCounter, workLoop, breakLoop]);

  const prototypeCounter = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(0);
    setSeconds(0);
    setWorkLoop(0);
    setBreakLoop(0);
    setBreakTimeWorkTime("WHYYYYY");
  };

  const disableStopButton = isActive === false;

  const disableGoButton = isActive === true;

  return (
    <AppTemplate
      minutes={minutes}
      seconds={seconds}
      onGoClick={() => prototypeCounter(minutes, seconds)}
      onStopClick={() => resetTimer()}
      workLoop={workLoop}
      breakLoop={breakLoop}
      breakTimeWorkTime={breakTimeWorkTime}
      disableStopButton={disableStopButton}
      disableGoButton={disableGoButton}
    />
  );
}

export default App;
