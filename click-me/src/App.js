//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const App=()=>{
const [values,setValue]=useState(true);

// const buttonCLick=()=>{
//   setValue(!values);
// }
// useEffect(()=>{
//   setValue(values)
// },[values])
  return(
    <div>
      <button onClick={()=>{setValue(!values)}}>Click Me To Change The Weather</button>
    {values?<h1 className='sunny'> Sunny</h1>:
  <h2 className='rainy'>Rainy</h2>}
    </div>
    
  )

}

export default App;
