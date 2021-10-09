import { useParams } from "react-router-dom";
import "./Todo.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { getTodoError, getTodoSucces } from "../redux/action";

function Edit() {
  const [newData, setNewData] = useState("");
  const [data, setData] = useState({});
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

  const handleEdit = async () => {
    await axios.patch(`http://localhost:3002/todos/${id}`, {
      status: false,
      title: newData,
    });
    history.replace("/");
  };

  return (
    <div>
      <h1>Title : {data.title}</h1>
      <input
        type="text"
        onChange={(e) => {
          setNewData(e.target.value);
        }}
        value={newData}
        placeholder="edit todo"
      />
      <button onClick={handleEdit}>EDIT NOW</button>
    </div>
  );
}

export default Edit;
