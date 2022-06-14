import { useState } from "react";

const Login=()=>{
const[email,setEmail]=useState("");
const [passwd,setPasswd]=useState("");


const formVal=()=>{
    return email.length>0 && passwd.length>0

}

const handleSubmit=(event)=>{
  event.preventDefault();
}

return(
    <div className="Login">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit} >
            <div>
            <label>Email ID:</label>
            <input type='email' value={email} onChange={(event)=>setEmail(event.target.value)} required></input>
            </div>
            <div>
            <label>Password</label>
            <input type='password' value={passwd} onChange={(event)=>setPasswd(event.target.value)} required></input>
            </div>
            <button type='submit' disabled={!formVal()}> Login</button>
            {/* //{formVal?<h1>Success</h1>:<h1>Failure</h1>} */}
        </form>
    </div>
)
}
export default Login;