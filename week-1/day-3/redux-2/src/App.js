import './App.css'
import Todo from './Components/Todo'
import { Switch, Route } from 'react-router-dom'
import TodoDetail from './Components/TodoDetail'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Todo />
        </Route>
        <Route path="/:id" exact>
          <TodoDetail />
        </Route>
        <Route>404 not found</Route>
      </Switch>
    </div>
  )
}

export default App
