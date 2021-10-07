import { useState } from "react";
import { store } from "../redux/store";
import "./Calculator.css";
import {
  addCount,
  reduceCount,
  multiplyCount,
  devideCount,
} from "../redux/action";

function Calculator() {
  const [data, setData] = useState();
  const { counter } = store.getState();
  console.log("find", store.getState());

  const handleAdd = () => {
    store.dispatch(addCount(data));
    setData();
  };

  const handleReduce = () => {
    store.dispatch(reduceCount(data));
    setData();
  };

  const handleMultiply = () => {
    store.dispatch(multiplyCount(data));
    setData();
  };

  const handleDevide = () => {
    store.dispatch(devideCount(data));
    setData();
  };

  return (
    <div>
      <h1>Count : {counter}</h1>
      <br />
      <input
        type="number"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        placeholder="type number"
      />
      <br />
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>SUBTRACT</button>
      <button onClick={handleMultiply}>MULTIPLY</button>
      <button onClick={handleDevide}>DEVIDE</button>
    </div>
  );
}

export default Calculator;
