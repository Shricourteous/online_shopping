import { createContext, useEffect, useState } from "react";
import { authStateChangeListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.util";

// NOTE: Purpose: Set up CONTEXT currentUser by Listening Auth  
//NOTE: in UserContextProvider > UseEffect > retrun stmt comented(Seems like no use)

export const UserContext = createContext({
//  (1) default value
    currentUser : null,
    setcurrentUser : () => null
})

export const UserContextProvider =({children})=> {
    // (2) Define it
    const [currentUser, setcurrentUser] = useState(null);

    useEffect(()=>{
        const unsubscribe  = authStateChangeListener((user)=> {
            // NOTE: this Call back block runs where ever the auth state changes

            if(user){
             createUserDocumentFromAuth(user)
            }
            setcurrentUser(user)
        });
 
        return ()=>{unsubscribe();};
    }, [])

// (3) Wrapping up the variable - function , as value 
    const value = {currentUser, setcurrentUser};

// (4)  pass the wrapped value into value keyword to the contextProvider
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}