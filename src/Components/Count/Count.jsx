import React, { useEffect, useState } from "react";
import Affichage from "../Affichage/Affichage";
import "./Count.css";

const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="count-container">
      <Affichage fromage={count} />
      <Affichage fromage={150} />
      <button onClick={increment}>Increment</button>
      {count > 0 && <button onClick={decrement}>Decrement</button>}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Count;
