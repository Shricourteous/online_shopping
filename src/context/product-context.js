import { createContext, useEffect, useState } from "react";
import { addCollectionandDocument } from "../utils/firebase/firebase.util";
import SHOP_DATA from "../shop-data"


export const ProductContext = createContext({
    products: null,
    setproducts : ()=>null
})

export const ProductContextProvider = ({children}) => {
    const [products, setproducts] = useState([])


    /**
     *  NOTE : the below script is an example of how the batch of data is inserted!!!
     */
    // useEffect(()=>{
    //     addCollectionandDocument("categories", SHOP_DATA)
    //     // console.log(SHOP_DATA)
    // }, [])

    
    const value = {products, setproducts}

    useEffect(()=>{
        setproducts([])  // <====================== add products here
    },[])

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>

}