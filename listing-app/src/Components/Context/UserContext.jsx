import {createContext} from 'react';

export const UserContext= createContext({

});

export const UserProvider =({children})=>{
return(
    <UserContext.UserProvider>{children}</UserContext.UserProvider>
) 
}