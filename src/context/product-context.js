import { createContext, useEffect, useState } from "react";

import SHOP_DATA from "../shop-data/shop-data.json"


export const ProductContext = createContext({
    products: null,
    setproducts : ()=>null
})

export const ProductContextProvider = ({children}) => {
    const [products, setproducts] = useState(SHOP_DATA)

    const value = {products, setproducts}

    useEffect(()=>{
        setproducts(SHOP_DATA)
    },[])

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>

}