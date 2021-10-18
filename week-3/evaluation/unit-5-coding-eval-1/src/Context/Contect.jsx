import { createContext, useState } from "react";


export const Context = createContext({})

function ContextProvider({children}){

    const [checkLogin,setCheckLogin] = useState(true)

    const handlecheckLogin=()=>{

    }

    return(
        <Context.Provider value={{checkLogin,handlecheckLogin}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;