import { createContext, useEffect, useState } from "react";
import { addCollectionandDocument, getCategoriesAndDocuments } from "../utils/firebase/firebase.util";
import SHOP_DATA from "../shop-data"


export const CategoriesContext = createContext({
    categoryMap : {}
})

export const CategoriesContextProvider = ({children}) => {
    const [categoryMap, setcategoryMap] = useState({})

    /**
     *  NOTE : the below script is an example of how the batch of data is inserted!!!
     */
    // useEffect(()=>{
    //     addCollectionandDocument("categoryMap", SHOP_DATA)
    //     // console.log(SHOP_DATA)
    // }, [])


    useEffect(() => {
        const getCatAndDoc = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setcategoryMap(categoryMap) ;
        }
      getCatAndDoc()

    }, [])
    
    const value = {categoryMap}

    // useEffect(()=>{
    //     setproducts()  // <====================== add products here
    // },[])

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}