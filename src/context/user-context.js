import { createContext, useEffect, useReducer, useState } from "react";
import { authStateChangeListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.util";
import { createAction } from "../utils/firebase/reducer.util";

// NOTE: Purpose: Set up CONTEXT currentUser by Listening Auth  
//NOTE: in UserContextProvider > UseEffect > retrun stmt comented(Seems like no use)



// Implementing Reducer Redux
const userReducer = (state, action)=>{
    const {type, payload} = action
    console.log("Dispatched..")
    console.log(action)
    switch (type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser : payload
            }
    
        default:
            return new Error(`unhandled Type ${type}`)
    }
}

const INITIAL_STATE = {
    currentUser: null
}

// COntext .............................
export const UserContext = createContext({
    //  (1) default value
        currentUser : null,
        setcurrentUser : () => null
    })

export const UserContextProvider =({children})=> {
    // (2) Define it
    // const [currentUser, setcurrentUser] = useState(null);
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)
    console.log(currentUser)


    const setcurrentUser= (user)=> {
        dispatch(createAction("SET_CURRENT_USER", user))
    }
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