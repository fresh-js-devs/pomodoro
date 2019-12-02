import React from "react";
import { useState } from "react";
import AppTemplate from "./components/templates/AppTemplate";

function App() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);

  const timeCounter = (minutes, seconds) => {

  }

  return (
    <AppTemplate
      onMinutesChange={setMinutes}
      onSecondsChange={setSeconds}
      minutes={minutes}
      seconds={seconds}
    />
  );
}

export default App;
