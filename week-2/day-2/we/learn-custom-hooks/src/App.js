import './App.css';

// import {Timer} from "./Components/Timer"
// import {Github} from "./Components/Github"
// import Counter from './Components/Counter';
// import Todo from './Components/UseReducer';
import MergeState from './Components/MergeStateHook';

function App() {
  return (
    <div className="App">
      {/* <Timer/> */}
      {/* <Github/> */}
      {/* <Counter/> */}
      {/* <Todo/> */}
      <MergeState/>
    </div>
  );
}

export default App;


// function throttle( fn, wait ){
//   let lastCall = 0;
//   return function(){
//   if( Date.now() - lastCall > wait  ){
//     lastCall = Date.now()
//     fn()
//   }
// }
// }

// function debouncer( delay, callback ){
//   var debounce;
//   return function(e){
//       debounce && clearTimeout(debounce);
//       debounce = setTimeout(function(){
//           callback(e)
//       },delay)
//   }
// }

