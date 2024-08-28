import "./category.style.scss";
import React from "react";
import Home from "./component/home/home.component";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./component/navbar/navbar.components";
import ShopPage from "./component/routes/shop/shop.component";
import SignIn from "./component/routes/signIn/signIn.component";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
      <Route index element={<Home/>}/>
      <Route path="shop" element={<ShopPage />} />
      <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
