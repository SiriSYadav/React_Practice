import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Home from './components/home/home.component';
import {Routes,Route,Link} from 'react-router-dom';
import Navigation from './Routes/Navigation/navigation.component';

const App=()=> {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>

  
    </div>
  )
}

export default App;
