import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import Home from './Components/Routes/Home/home.component';
import { Route,Routes } from 'react-router-dom';
import Temp from './Components/Temporary/temp.component';
import { Outlet } from 'react-router-dom';
import Navigation from './Components/Routes/Navigation/navigation.component';


  

const App=() =>{
  return( 
    <div>
<Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='temp' element={<Temp/>}/>
    </Route>
  </Routes>

    </div>
  
  )  
  
}

export default App;
