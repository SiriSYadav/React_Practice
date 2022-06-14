import { Outlet,Link } from "react-router-dom";
import {ReactComponent as Crwn} from '../../../assets/Crwn.svg'
import './navigation.styles.css'


const Navigation=()=>{
    return(
      <div>
        
        <Link className='logo' to='/'>
        <Crwn/>
        </Link>
        
          <Link className='nav-link'to='/'>Employee Details</Link>
          <Link className='nav-link'to='/temp'>Temp</Link>
        <div>
        <Outlet/>
        </div>
      </div>
       
        
    )
  }

  export default Navigation;