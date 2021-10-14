import { useEffect, useState } from "react";

function Counter(){

    const [count,setCount] = useState(1)

    useEffect(()=>{
        setInterval(()=>{
            setCount((p)=>p+1)
        },1000)
    },[])

    return(
        <div style={{position:"absolute",top:"30px",right:"200px"}}><h2>Count : {count}</h2></div>
    )
}

export default Counter;