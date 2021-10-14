
import axios from "axios";
import { useEffect, useState } from "react";
import {useParams,useHistory} from "react-router-dom"
import {Button,TextField} from "@mui/material"

function EditTodo(){
    const [newTitle,setNewTitle] = useState("")
    const [detail,setDetail] = useState({})
    const history = useHistory()
    const {id} = useParams()

    useEffect(()=>{
        allDetail()
    },[])

    async function allDetail(){
        await axios.get(`http://localhost:3002/todos/${id}`)
        .then((e)=>{
            // console.log(e.data);
            setDetail(e.data)
            
        })
    }

    async function handleNewTitle(data){
        await axios.patch(`http://localhost:3002/todos/${id}`,{
            text : data
        })
        history.replace("/")
    }

    return(
        <div>
            <h3>Title : {detail.text}</h3>
            <TextField
          required
          onChange={(e)=>{
              setNewTitle(e.target.value)
          }}
          id="outlined-required"
          label="Required"
        //   defaultValue="Add Todo"
        /> <br />
        <Button onClick={()=>{
            handleNewTitle(newTitle)
        }} style={{margin:"20px"}} variant="contained">NEW TITLE</Button>
        </div>
    )

}

export default EditTodo;