import "./category.style.scss";
import React from "react";
import Home from "./component/home/home.component";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./component/navbar/navbar.components";
import ShopPage from "./component/routes/shop/shop.component";
import Authentication from "./component/routes/authentication/authentication.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
      <Route index element={<Home/>}/>
      <Route path="shop" element={<ShopPage />} />
      <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
