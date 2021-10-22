import React, { useState } from "react";
import { Button } from "./Button";

export const Counter = () => {
  const [count, setCounter] = useState(0);

  const increment = () => {
    setCounter(count + 1);
  };

  const decrement = () => {
    setCounter(count - 1);
  };

  return (
    <div>
      <div>
        <h1>Counter</h1>
        <h1 data-testid="count">{count}</h1>
      </div>
      <Button label="increment" onClick={increment}></Button>
      <Button label="decrement" onClick={decrement}></Button>
    </div>
  );
};
