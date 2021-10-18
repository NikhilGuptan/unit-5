
import axios from "axios";
import { useEffect, useState } from "react";

import {useParams} from "react-router-dom"

function MoviesDetail(){

    const [data,setData] = useState({})

    const {id} = useParams()

    useEffect(()=>{
        getData()
    },[])

    async function getData(){
        await axios.get(`http://localhost:3002/movies/${id}`)
        .then((e)=>{
            console.log(e.data);
            setData(e.data)
        })
    }

    return(
        <div style={{width:"50%",margin:"auto"}}>
                        <h1>Title : {data.title}</h1>
                        <h2>description : {data.description}</h2>
                        <h3>Rating : {data.rating}</h3>
                        <img style={{width:"400px"}} src={data.image} alt="movie image" />
        </div>
    )
}

export default MoviesDetail;