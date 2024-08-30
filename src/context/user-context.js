import { createContext, useEffect, useState } from "react";
import { authStateChangeListener, signOutUser } from "../utils/firebase/firebase.util";




export const UserContext = createContext({
//  (3) unWrap the value for cration
    currentUser : null,
    setcurrentUser : () => null
})

export const UserContextProvider =({children})=> {
    
    const [currentUser, setcurrentUser] = useState(null);

    signOutUser();
    
    useEffect(()=>{
        const unsubscribe  = authStateChangeListener((user)=> {
            console.log(user)
        });
        return unsubscribe;
    }, [])

// (1) Wrapping up the variable and function as value 
    const value = {currentUser, setcurrentUser};

// (2)  pass the wrapped value into value keyword to the contextProvider
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}