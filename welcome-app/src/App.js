import logo from './logo.svg';
import './App.css';
import Welcome from './Components/welcome Component/welcome.component';
import Designation from './Components/Designation/designation.component';

const App=()=> {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome APP</h1>
        <Welcome name='Siri'/><Designation designation='Developer'></Designation>
        
        <Welcome name='Sam'/><Designation designation='Analyst'></Designation>
        
        <Welcome name='Jim'/><Designation designation='HR'></Designation>

      </header>
    </div>
  );
}

export default App;
