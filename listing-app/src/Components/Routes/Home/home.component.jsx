//import { Outlet } from "react-router-dom";


const Home=()=>{
    const listeItems=[{
        name:'Siri',
        id:1,
      },
      {
        name:'Sam',
        id:2,
      },
      {
        name:'Jim',
        id:3,
      },
      {
        name:'Pam',
        id:4,
      },
    ]
      return (
        
        <div className="App">
          <header className="App-header">
           
           {listeItems.map(({name,id})=>(
            <div>
              <h1>{name}:{id}</h1>
            
            </div> 
           ))}
          
          
          </header>
        </div>
      );
}
export default Home;