import { Route, Routes } from "react-router-dom"
import "./shop.style.scss"
import CategoriesPreview from "../../categories-preview/categories-preview"
import Category from "../category/category.component"

const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category/>}/>
    </Routes>
  )

}

export default ShopPage