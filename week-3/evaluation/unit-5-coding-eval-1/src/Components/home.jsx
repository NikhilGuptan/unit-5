import "./home.css";
import Button from "@mui/material/Button";
import {Link,useHistory} from "react-router-dom"

function Home() {

    const history = useHistory()

    const handleLogin=()=>{
        history.push("/login")
    }

  return (
    <div>
      <nav className="Homenav">
        <h1>MeetUp</h1>
        <Button onClick={handleLogin} variant="contained">LogIn</Button>
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
    </div>
  );
}

export default Home;
