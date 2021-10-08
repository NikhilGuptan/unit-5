import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action";
import { v4 as uuid } from "uuid";
import "./Todo.css";

function Todo() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  //   console.log(todos);

  const handleAdd = () => {
    if (title === "") {
      return;
    }
    const data = {
      title,
      status: false,
      id: uuid(),
    };
    dispatch(addTodo(data));
    setTitle("");
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        value={title}
        placeholder="add todo"
      />
      <br />
      <button onClick={handleAdd}>ADD TODO</button>
    </div>
  );
}

export default Todo;
