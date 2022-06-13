//import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react' ;

const App=()=> {

  const [counter,setCounter]=useState(0);
  const [change,setChange]=useState(true);

  useEffect(()=>{
    console.log("mount");
    setCounter(counter + 1)
  },[change])
  console.log(counter);
 
  return (
    <div className="App">
      <header className="App-header">
        <h1> Simple Counter</h1>
        {counter}
        <button onClick={()=>setChange(!change)}>Increase</button>
      <button onClick={()=>setCounter(counter-1)}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
