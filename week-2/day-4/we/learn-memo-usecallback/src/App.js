
import './App.css';
import TodoInput from './Components/TodoInput';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App" style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"50%",margin:"auto"}}>
      <TodoInput/>
      <Counter/>
    </div>
  );
}

export default App;



// const delay = (time) => {
//   const start = Date.now();
//   while (Date.now() - start < time) {
//     continue;
//   }
//   return;
// };

