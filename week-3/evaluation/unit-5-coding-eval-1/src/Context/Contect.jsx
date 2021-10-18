import { createContext } from "react";


export const Context = createContext({})

function ContextProvider({children}){

    return(
        <Context.Provider value="hello">
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;