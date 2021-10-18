
import Home from "./Components/home";
import {Route,Switch} from "react-router-dom"
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route>
          <Login/>
        </Route>
        <Route>
          404 not found
        </Route>
      </Switch>
    </div>
  );
}

export default App;
