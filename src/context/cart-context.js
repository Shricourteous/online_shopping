import { createContext,  useReducer} from "react";
import { createAction } from "../utils/firebase/reducer.util";


const SET_REDUCER_TYPE = {
    SET_CART_ITEMS: 'SET_CART_ITEMS'
}

const INITIAL_STATE = {
    cartItems: [],
    cartTotal: 0,
    cartCount: 0
}

const cartReducer = (state, action) => {
    console.log(action)
    const {type, payload} = action;

    switch (type) {
        case SET_REDUCER_TYPE.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }

        default:
            throw new Error(`Type Error not handled ${type}`)
    }
}




// Helping Functions:
const addToCartItemArray = (cartItems, productItem) => {

    let prev = false;
    cartItems.map((eachItem) => {
        if (eachItem.id == productItem.id) {
            eachItem.quantity += 1
            prev = true
        }
        return eachItem
    })
    if (prev) {
        return [...cartItems];
    }
    return [...cartItems, { ...productItem, quantity: 1 }]
}

const removeFromCartItemArray = (cartItems, removeId) => {
    const newCartItems = []
    cartItems.forEach(element => {
        console.log("removing.....", removeId)
        if (element.id != removeId) {
            newCartItems.push(element)
        } else {
            console.log("mached removed")
        }
    });
    console.log(newCartItems)
    return newCartItems
}

const increaseQuantityCartArray = (cartItems, productId) => {
    cartItems.map((eachItem) => {
        if (eachItem.id == productId) {
            console.log("matched", eachItem, productId)
            eachItem.quantity += 1;
        }
        return eachItem
    })
    return [...cartItems]
}

const decreaseQuantityCartArray = (cartItems, productId) => {
    cartItems.map((eachItem) => {
        if (eachItem.id == productId) {
            console.log("matched", eachItem, productId)
            if (eachItem.quantity > 1) {
                eachItem.quantity -= 1
            } else {
                alert("product is already one")

            }
        }
        return eachItem
    })
    return [...cartItems]
}

// actual Ccntext Outline
export const CartContext = createContext({
    cartItems: [],
    addToCart: () => null,
    removeFromCart: () => null,
    increaseQuantity: () => null,
    decreaseQuantity: () => null,
    settotal: () => null,
    cartTotal: 0
})

// Context Process: 
export const CartContextProvider = ({ children }) => {

    const [{ cartItems , cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const updateCartItemReducer = (newCartItems) => {
        const newCartTotal = newCartItems.reduce((prev, eachItem) => prev + eachItem.price * eachItem.quantity, 0)
        const newCartCount = newCartItems.reduce((prev, eachItem) => prev + eachItem.quantity, 0)

        dispatch(createAction("SET_CART_ITEMS", {
            cartItems: newCartItems,
            cartTotal: newCartTotal,
            cartCount: newCartCount
        }))

    }


    const addToCart = (productItem) => {
        const newCartItems = addToCartItemArray(cartItems, productItem)
        updateCartItemReducer(newCartItems)
    }

    const removeFromCart = (removeId) => {
        // console.log("Removing cart id " , removeId)
        const newCartItems = removeFromCartItemArray(cartItems, removeId)
        // console.log(cartItems)
        updateCartItemReducer(newCartItems)

    }

    const increaseQuantity = (productId) => {
        // setcartItems(cartItems)
        // console.log("Adding ", productId)
        const newCartItems = increaseQuantityCartArray(cartItems, productId)

        updateCartItemReducer(newCartItems)

    }

    const decreaseQuantity = (productId) => {
        const newCartItems = decreaseQuantityCartArray(cartItems, productId)
        // console.log("decreasing ", productId)
        updateCartItemReducer(newCartItems)

    }

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartTotal
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}