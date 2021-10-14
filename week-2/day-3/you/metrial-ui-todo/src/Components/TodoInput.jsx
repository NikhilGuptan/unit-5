import { useState,useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {TextField,Button} from "@mui/material"

function TodoInput(){
    const [text,setText] = useState("");
    const [list,setList] = useState([])

    async function handleClick(){
        await axios.post("http://localhost:3002/todos",{
            status:false,
            text:text
        })
        showTodo()
    }

    useEffect(()=>{
        showTodo()
    },[])

    async function showTodo(){
        await axios.get("http://localhost:3002/todos")
        .then(e=>{
            setList(e.data)
            console.log(list);
        })
    }

    

    return(
        <div style={{marginTop:"30px"}}>
            <TextField
          required
          onChange={(e)=>{
              setText(e.target.value)
          }}
          id="outlined-required"
          label="Required"
        //   defaultValue="Add Todo"
        /> <br />
         <Button onClick={handleClick} style={{margin:"20px"}} variant="contained">ADD TODO</Button>
         {list.map((e)=>{
             return (
                 <div key={e.id}>
                 <Link style={{textDecoration:"none"}}  to={`/detail/${e.id}`}><h4 >{e.text}</h4></Link>
                 <Link to={`/edit/${e.id}`}><Button  variant="contained" color="success">EDIT</Button></Link>
                 </div>
             )
         })}
        </div>
    )
} 

export default TodoInput; 