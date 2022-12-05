import React from "react";

export default function Die(props) {
  return (
    <div className="die">
      <div className="die-value">{props.value}</div>
    </div>
  );
}
