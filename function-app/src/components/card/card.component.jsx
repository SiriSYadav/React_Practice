import { Component } from "react";
 
const Card=({monsters})=>{
        const {name}=monsters;
        return(
            <div>
                <h2>{name}</h2>
            </div>
        )
   
}
export default Card;