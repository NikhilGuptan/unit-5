import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addTodoError,
  addTodoSucces,
  getTodoError,
  getTodoSucces,
} from "../redux/action";

import axios from "axios";

function Todo() {
  const [title, setTitle] = useState("");

  const { data } = useSelector((store) => store.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const set = await axios.get("http://localhost:3002/todos");
      dispatch(getTodoSucces(set.data));
      setTitle("");
    } catch (err) {
      dispatch(getTodoError(err.message));
    }
  };

  const handleAdd = async () => {
    try {
      const resp = await axios.post("http://localhost:3002/todos", {
        status: false,
        title: title,
      });
      dispatch(addTodoSucces(resp.data));
      getTodos();
    } catch (e) {
      dispatch(addTodoError(e.message));
    }
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
      {data.map((e) => {
        return (
          <Link key={e.id} to={`/${e.id}`}>
            <div key={e.id}>{e.title}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default Todo;
