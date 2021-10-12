import { useState } from "react"

function useEffectTime(ms){
    const [show,setShow] = useState(false);

    setTimeout(() => {
      setShow(true)  
    }, ms);
    return show;
}


export function Timer(){
    const timer = useEffectTime(5000)

    return(
        <div>{timer ? "welcome":"loading..."}</div>
    )
}