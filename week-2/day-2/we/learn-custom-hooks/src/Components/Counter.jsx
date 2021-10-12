import { useReducer } from "react";


const reducer = (state,{type,payload})=>{
    switch(type){
        case "ADD_COUNT":
            return{
                ...state,
                count: state.count+payload
            };
            case "REDUCE_COUNT":
            return{
                ...state,
                count: state.count+payload
            };
        default:
            return{
                ...state
            }
    }
}

const init = {
    count:2,
}

function Counter(){
    const [state,dispatch] = useReducer(reducer,init)
    // console.log(state);

    return(
        <div>
            <h3>Count : {state.count}</h3>
            <button onClick={()=>{
                dispatch({
                    type:"ADD_COUNT",
                    payload:1
                })
            }}>ADD 1</button>
            <button onClick={()=>{
                dispatch({
                    type:"REDUCE_COUNT",
                    payload:-1
                })
            }}>REDUCE 1</button>
        </div>
    )
}

export default Counter

