import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import "./home.css"

function Login(){

    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [interst,setInterset] = useState("")

    const handleSubmit=()=>{
        console.log(name,age,interst);
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