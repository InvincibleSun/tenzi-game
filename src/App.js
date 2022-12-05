import React from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
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
