import React from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  function allNewDice() {
    const arrOfNumbers = [];
    for (let i = 0; i < 10; i++) {
      const number = Math.ceil(Math.random() * 6);
      arrOfNumbers.push(number);
    }
    return arrOfNumbers;
  }

  return (
    <main>
      <div className="content">
        <div className="dice">
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={6} />
          <Die value={5} />
          <Die value={4} />
        </div>
      </div>
    </main>
  );
}

export default App;
