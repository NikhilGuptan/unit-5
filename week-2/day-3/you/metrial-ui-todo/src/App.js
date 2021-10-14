
import './App.css';
import TodoInput from './Components/TodoInput';
import {Switch,Route} from "react-router-dom";
import TodoDetail from './Components/TodoDetail';
import EditTodo from './Components/EditTodo';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <TodoInput/>
        </Route>
        <Route path="/detail/:id">
          <TodoDetail/>
        </Route>
        <Route path="/edit/:id">
          <EditTodo/>
        </Route>
        <Route>
          404 not found
        </Route>
      </Switch>
    </div>
  );
}

export default App;
