import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isIncrement, setIsIncrement] = useState(true);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        if (isIncrement) {
          setCount((prevCount) => prevCount + 1);
        } else {
          setCount((prevCount) => prevCount - 1);
        }
      } else if (event.code === "Backspace") {
        event.preventDefault();
        setCount(0);
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isIncrement]);

  return (
    <div style={{ textAlign: "center" }}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');`}
      </style>
      <div className="Component">
        <h1>Simple Counter App</h1>
        <h2>Count: {count}</h2>
        <button
          className="btn1 btn"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Increment <span>+</span>
        </button>
        <button
          className="btn2 btn"
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          Decrement <span>-</span>
        </button>
        <br />
        <button className="reset btn" onClick={() => setCount(0)}>
          Reset
        </button>
        <p className="resetNote">Press BackSpace to reset.</p>
        <br />
        <div className="toggle-container">
          <label className="switch">
            <input
              type="checkbox"
              checked={isIncrement}
              onChange={() => setIsIncrement((prev) => !prev)}
            />
            <span className="slider"></span>
          </label>
          <p>
            {isIncrement
              ? "Press SpaceBar to Currently Incrementing."
              : "Press SpaceBar to Currently Decrementing."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
