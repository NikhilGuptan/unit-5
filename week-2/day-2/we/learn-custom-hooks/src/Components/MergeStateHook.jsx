import { useReducer } from "react";
import { useState } from "react/cjs/react.development";



function MergeState(){

        const [username,setUsername] = useState("")
        const [email,setEmail] = useState("")
        const [pass,setPass] = useState("");
        const [check,setCheck] = useState(false);

        const handleSubmit=()=>{
            setCheck(true)
        }

    return(
        <div>
                <input type="text" onChange={(e)=>{setUsername(e.target.value)}}  placeholder="enter Username" /><br />
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter Email" /><br />
                <input type="password" onChange={(e)=>{setPass(e.target.value)}} placeholder="enter password"/><br />
                <button onClick={handleSubmit}>SUBMIT</button>
                {check ? <div>
                    <p>Username : {username}</p>
                    <p>Email : {email}</p>
                    <p>Password : {pass}</p>
                </div> : ""}
        </div>
    )
}

export default MergeState;