import React from "react";

export default function Dice(props) {
  return (
    <div className={props.isHeld ? "dice green" : "dice"} onClick={props.funcHoldDice}>
      <div className="dice-value">{props.value}</div>
    </div>
  );
}
