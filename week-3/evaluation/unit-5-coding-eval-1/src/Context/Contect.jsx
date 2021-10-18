import { createContext, useState } from "react";


export const Context = createContext({})

function ContextProvider({children}){

    const [checkLogin,setCheckLogin] = useState(false)

    const handlecheckLogin=()=>{
        setCheckLogin(!checkLogin)
    }

    return(
        <Context.Provider value={{checkLogin,handlecheckLogin}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;