import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/action";
import "./Todo.css";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((store) => {
    return store.todos;
  });

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      {todos.map((e) => {
        return (
          <div key={e.id}>
            <p style={{ textDecoration: e.status ? "line-through" : "none" }}>
              {e.title}
            </p>
            <button
              onClick={() => {
                handleDelete(e.id);
              }}
            >
              DELETE
            </button>
            <button
              onClick={() => {
                handleToggle(e.id);
              }}
            >
              TOGGLE
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
