import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useState } from "react";
import "./home.css"
import {useHistory} from "react-router-dom"

function Login(){

    const history = useHistory()

    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [interst,setInterset] = useState("")

    const handleSubmit= async ()  =>{
        await axios.post("http://localhost:3002/userDetail",{
            name,
            age,
            interst
        })
        history.replace("/")
    }

    return(
        <div style={{width:"30%",margin:"auto",marginTop:"50px"}}>
            <TextField className="textFile"  onChange={(e)=>{setName(e.target.value)}} id="filled-basic" label="username" variant="filled" /><br />
            <TextField className="textFile"  onChange={(e)=>{setAge(e.target.value)}} id="filled-basic" label="age" variant="filled" /><br />
            <TextField className="textFile" onChange={(e)=>{setInterset(e.target.value)}}id="filled-basic" label="interst" variant="filled" /><br />
            <Button onClick={handleSubmit} variant="contained">Submit</Button>
        </div>
    )
}

export default Login;