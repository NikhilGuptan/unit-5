
import { useReducer, useState } from "react";

function Todo(){
    const [todo,setTodo] = useState("")
    const [list,setList] = useState([]);

    const handleTodo=()=>{
        setList([...list,todo])
        // console.log(list);
        setTodo("")
    }

    return(
        <div>
            <input type="text" placeholder="add todo" value={todo} onChange={(e)=>{
                setTodo(e.target.value)
            }} /> <br />
            <button onClick={handleTodo}>ADD TODO</button>
            {list.map((e,i)=>{
               return <p key={i}>{e}</p>
            })}
        </div>
    )
}

export default Todo;