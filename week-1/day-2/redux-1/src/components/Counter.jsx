import { store } from "../redux/store";
import { addCount, reduceCount } from "../redux/action";
import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  const { counter } = store.getState();
  console.log("find", store.getState());

  const handleAdd = () => {
    store.dispatch(addCount(1));
    setValue(value + 1);
  };

  const handleReduce = () => {
    store.dispatch(reduceCount(1));
    setValue(value - 1);
  };

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>REDUCE</button>
    </div>
  );
}

export default Counter;
