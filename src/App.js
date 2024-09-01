import React from "react";
import { Route, Routes } from "react-router-dom";

import NavigationBar from "./component/navbar/navbar.components";
import Authentication from "./component/routes/authentication/authentication.component";
import Home from "./component/home/home.component";
import ShopPage from "./component/routes/shop/shop.component";
import CheckoutPage from "./component/routes/checkout/checkout-component";

import "./category.style.scss";




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
      <Route index element={<Home/>}/>
      <Route path="shop" element={<ShopPage />} />
      <Route path="auth" element={<Authentication />} />
      <Route path="checkout" element={<CheckoutPage/>}/>
      </Route>
    </Routes>
  );
};

export default App;
