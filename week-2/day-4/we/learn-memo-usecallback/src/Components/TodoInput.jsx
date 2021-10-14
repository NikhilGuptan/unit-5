import { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import "./Todo.css"
import axios from "axios";

const arr = ["red","green","blue","yellow","orange","blueviolet","brown","cadetblue","cyan","chartreuse","darkmagenta"];


function TodoInput(){
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [list,setList] = useState([]);
    const [random,setRandom] = useState("")

    async function getData(){
        await axios.get("http://localhost:3002/todos")
        .then((e)=>{
            // console.log(e.data);
            setList(e.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])


    async function handleAdd(){

        const randomColor = Math.floor(Math.random()*11)
    
        await axios.post("http://localhost:3002/todos",{
            title,
            body,
            verify:false, 
            color:arr[randomColor]
        })
        getData()
    }

    async function handleToggle(key,status){
        await axios.patch(`http://localhost:3002/todos/${key}`,{
            verify:!status
        })
        getData()
    }

    async function handleDelete(key){
        await axios.delete(`http://localhost:3002/todos/${key}`)
        getData()
    }

    return(
        <div>
            <div style={{padding:"30px",border:"3px solid black",width:"100%"}}>
                <input className="inputtext" onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Add title" /> <br />
                <input className="inputtext" onChange={(e)=>{setBody(e.target.value)}} type="text" placeholder="Add body" /> <br />
                <button className="Add" onClick={handleAdd}>ADD</button>
            </div>

            <div style={{padding:"30px",border:"3px solid black",width:"100%",marginTop:"50px"}}>
                {list.map((e)=>{
                  return  <div style={{padding:"10px",border:"1px solid black",width:"90%",margin:"auto",marginTop:"10px"}} key={e.id}>
                      <div style={{background: e.color }} className="box"></div>
                        <p style={{textDecoration:e.verify ? "line-through":"none"}}>Title : {e.title}</p>
                        <p>Body :{e.body}</p>
                        <button onClick={()=>handleToggle(e.id,e.verify)} className="verify">Verify</button>
                        <button onClick={()=>{handleDelete(e.id)}} className="verify2" >DELETE</button>
                    </div>
                })}
            </div>

        </div>
    )

}

export default TodoInput;