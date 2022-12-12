import React from "react";
import "./App.css";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [diceArr, setDiceArr] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = diceArr.every((dice) => dice.isHeld);
    const firstValue = diceArr[0].value;
    const allSameValues = diceArr.every((dice) => dice.value === firstValue);
    if (allHeld && allSameValues) {
      setTenzies(true);
    }
  }, [diceArr]);

  function oneNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const arrOfDice = [];
    for (let i = 0; i < 10; i++) {
      arrOfDice.push(oneNewDice());
    }
    return arrOfDice;
  }

  function rollDice() {
    if (tenzies) {
      setTenzies(false);
      setDiceArr(allNewDice());
    } else {
      setDiceArr((prevState) =>
        prevState.map((dice) => {
          return dice.isHeld ? dice : oneNewDice();
        })
      );
    }
  }

  function holdDice(id) {
    setDiceArr((prevState) =>
      prevState.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  }

  const diceElements = diceArr.map((dice) => {
    return (
      <Dice
        value={dice.value}
        key={dice.id}
        isHeld={dice.isHeld}
        funcHoldDice={() => holdDice(dice.id)}
      />
    );
  });

  return (
    <main>
      <div className="content">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its current value between
          rolls.
        </p>
        <div className="all-dice">{diceElements}</div>
        <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        {tenzies && (
          <Confetti
            numberOfPieces={600}
            colors={["#f5f5f5", "#2b283a", "#4a4e74", "#59e391", "#5035ff", "#2711b1"]}
          />
        )}
      </div>
    </main>
  );
}

export default App;
