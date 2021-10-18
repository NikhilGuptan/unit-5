import { useParams } from "react-router-dom";
import "./Todo.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { getTodoError, getTodoSucces } from "../redux/action";

function TodoDetail() {
  const [data, setData] = useState({});
  const [toggle, setToggle] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const set = await axios.get(`http://localhost:3002/todos/${id}`);
      setData(set.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3002/todos/${id}`);
    getTodos();
    history.replace("/");
  };

  const handleBack = () => {
    history.replace("/");
  };

  return (
    <div>
      <h1 style={{ textDecoration: toggle ? "line-through" : "none" }}>
        Title : {data.title}
      </h1>
      <button onClick={handleToggle}>TOGGLE</button>
      <button onClick={handleDelete}>DELETE</button>
      <br />
      <Link to="/">
        <button onClick={handleBack}>BACK To HOME</button>
      </Link>
    </div>
  );
}

export default TodoDetail;
