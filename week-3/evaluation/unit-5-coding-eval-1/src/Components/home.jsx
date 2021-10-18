import "./home.css";
import Button from "@mui/material/Button";
import {Link,useHistory} from "react-router-dom"
import {Context} from "../Context/Contect"
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function Home() {

    const history = useHistory()
    const [movies,setMovies] = useState([])
    const [food,setfood] = useState([])
    const {checkLogin,handlecheckLogin} = useContext(Context)

    const handleLogin=()=>{
        history.push("/login")
    }

    useEffect(()=>{
        getMoviesData()
        getFoodData()
    },[])

    async function getMoviesData(){
        await axios.get("http://localhost:3002/movies")
        .then((e)=>{
            console.log(e.data);
            setMovies(e.data)
            console.log(movies);
        })
    }

    async function getFoodData(){
        await axios.get("http://localhost:3002/food")
        .then((e)=>{
            console.log(e.data);
            setfood(e.data)
        })
    }

  return (
    <div>
      <nav className="Homenav">
        <h1>MeetUp</h1>
        {checkLogin ? <img style={{width:"80px",borderRadius:"50%"}} src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg" alt="" /> : <Button onClick={handleLogin} variant="contained">LogIn</Button>}
        <Button variant="contained">signUp</Button>
      </nav>
      <div className="text">
      <h1>Dive in! There are so many things to do on Meetup</h1>
      <p>
        Join a group to meet people, make friends, find support, grow a
        business, and explore your interests. Thousands of events are happening
        every day, both online and in person!
      </p>
      </div>
      {
      checkLogin ? <div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"30px"}}>
            {movies.map((e)=>{
                return(
                    
                        <div key={e.id}>
                        <p>Title : {e.title}</p>
                        <p>description : {e.description}</p>
                        <p>Rating : {e.rating}</p>
                        <img style={{width:"200px"}} src={e.image} alt="movie image" />
                    </div>    
                ) 
            })}
     </div>
     <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"30px"}}>
            {food.map((e)=>{
                return(
                    
                        <div key={e.id}>
                        <p>Title : {e.title}</p>
                        <p>description : {e.description}</p>
                        <p>Rating : {e.rating}</p>
                        <img style={{width:"200px"}} src={e.image} alt="movie image" />
                    </div>    
                ) 
            })}
     </div>
      </div> : <div>
          <h1>upcoming meetups</h1>
          <p>First login to see the meetUp events</p>
      </div>
      }
    </div>
  );
}

export default Home;
