// NEXT PROJECT STARTED USECALLBACK HOOK

import './App.css';
import Header from './components/Header';
import React, {useState , useCallback} from 'react';

import Todos from './components/Todos';

  

function App(){
  // first we define state
 const [count , setCount] = useState(0);
 const [todos , setTodos] = useState([]);
 // increment function is declared
 const Increment = () => {
  setCount((c) => (c + 1) );
 };
// todos function is declared  
const addTodo = useCallback((num) => {
  setTodos((t) => [...t , `New Todo${num}`] );
 }, [todos]);
  return (
    <>
     <Header />
    <div>
      Count : {count}
     <button onClick={Increment}>+</button>
     </div>
     <hr/>
     <Todos todos={todos} addTodo={addTodo}/>
    </>
  );
}
export default App;

