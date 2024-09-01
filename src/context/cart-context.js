import { createContext, useEffect, useState } from "react";
/*
 * id
 * name
 * price
 * imageUrl
 * quantity
 */

// Helping Functions:
const addToCartItemArray = (cartItems, productItem) => {
    
    let prev = false;
    cartItems.map((eachItem)=>{
        if(eachItem.id==productItem.id){
            eachItem.quantity +=1
            prev = true
        }
        return eachItem
    })
    if (prev){
        return [...cartItems];
    }
    return [...cartItems, {...productItem, quantity : 1}]
}

const removeFromCartItemArray = (cartItems, removeId) => {
    const newCartItems = []
    cartItems.forEach(element => {
        console.log("removing.....", removeId)
        if(element.id!= removeId){
            newCartItems.push(element)
        }else{
            console.log("mached removed")
        }
    });
    console.log(newCartItems)
    return newCartItems
}

const increaseQuantityCartArray= (cartItems, productId )=> {
    cartItems.map((eachItem)=>{
        if(eachItem.id == productId){
            console.log("matched", eachItem, productId)
            eachItem.quantity +=1;
        }
        return eachItem
    })
    return [...cartItems]
}

const decreaseQuantityCartArray= (cartItems, productId )=> {
    cartItems.map((eachItem)=>{
        if(eachItem.id == productId){
            console.log("matched", eachItem, productId)
            if(eachItem.quantity >1){
                eachItem.quantity -=1
            }else{
                alert("product is already one")
               
            }
        }
        return eachItem
    })
    return [...cartItems]
}

// actual Ccntext Outline
export const CartContext = createContext({
    cartItems : [],
    addToCart: ()=> null,
    removeFromCart: ()=> null,
    increaseQuantity:()=> null,
    decreaseQuantity:()=> null,
    settotal : ()=> null,
    cartTotal: 0
})

// Context Process: 
export const CartContextProvider = ({children}) => {
    
    const [cartItems, setcartItems] = useState([])
    const [cartTotal, setcartTotal] = useState(0)

    const addToCart = (productItem)=>{
        setcartItems(addToCartItemArray(cartItems, productItem))
    } 

    const removeFromCart = (removeId)=> {
        console.log("Removing cart id " , removeId)
        setcartItems(removeFromCartItemArray(cartItems, removeId))
        console.log(cartItems)
    }

    const increaseQuantity = (productId)=> {
        setcartItems(cartItems)
        console.log("Adding ", productId)

        setcartItems(increaseQuantityCartArray(cartItems, productId ))
    }

    const decreaseQuantity = (productId)=> {
        setcartItems(decreaseQuantityCartArray(cartItems, productId ))
        console.log("decreasing ", productId)
    }

    useEffect(() => {
        const total = cartItems.reduce((prev , eachItem)=> prev + eachItem.price * eachItem.quantity , 0)
        setcartTotal(total)
    }, [cartItems])
    

    const value = {cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartTotal}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}