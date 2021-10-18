
import Home from "./Components/home";
import {Route,Switch} from "react-router-dom"
import Login from "./Components/Login";
import EventDetaail from "./Components/EventDetail";
import MoviesDetail from "./Components/MoviesDetail"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/food/:id">
          <EventDetaail/>
        </Route>
        <Route exact path="/movies/:id">
          <MoviesDetail/>
        </Route>
        <Route>
          404 not found
        </Route>
      </Switch>
    </div>
  );
}

export default App;
