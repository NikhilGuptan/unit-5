import axios from "axios";
import { useEffect, useState } from "react";
import {useParams,useHistory} from "react-router-dom"
import {Button} from "@mui/material"

function TodoDetail(){

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
            // console.log(detail);
        })
    }

    async function handleDelete(){
        await axios.delete(`http://localhost:3002/todos/${id}`)
        history.replace("/")   
    }

    async function handleToggle(stat){
        await axios.patch(`http://localhost:3002/todos/${id}`,{
            status : !stat
        })
        allDetail()
    }



    return(
        <div>
            <h3 style={{textDecoration:detail.status ? "line-through" : "none"}}>{detail.text}</h3>
            <Button onClick={handleDelete} style={{margin:"20px"}} variant="contained" color="error">DELETE</Button>
            <Button onClick={()=>{
                handleToggle(detail.status)
            }} style={{margin:"20px"}} variant="contained">TOGGLE</Button>
            
        </div>
    )
}

export default TodoDetail