
import axios from "axios";
import { useStore } from "react-redux";
import {useParams} from "react-router-dom"

function EventDetaail(){

    const [data,setData] = useStore({})

    const {id} = useParams()

    async function getData(){
        await axios.get(`http://localhost:3002/food/${id}`)
        .then((e)=>{
            console.log(e.data);
        })
    }

    return(
        <div>
            event
        </div>
    )
}

export default EventDetaail;