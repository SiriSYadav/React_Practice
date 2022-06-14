import {Routes,Route,Link,Outlet} from 'react-router-dom';
import './navigation.styles.css'

const Navigation=()=>{
    return(
        <div>
            <div classname='nav-link'>
            <Link to='/home'>Home</Link>
            </div>
        
    <div classname='nav-link'>
    <Link  to='/login'>Login</Link>
    </div>
       
        
         <div>
            <Outlet/>
         </div>
        </div>
        
    
    )
    
}
export default Navigation;