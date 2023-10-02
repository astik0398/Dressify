import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import Product from "../Components/Product";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import Admin from "../Components/Admin";
import Cart from "../Components/Cart";
import { SingleProductPage } from "./SingleProductPage";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<Product />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/cart'  element={<Cart/>}/>
        <Route path='/single/:id'  element={<SingleProductPage/>}/>

        <Route path="*" element={<h1>Page is Not found</h1>}/>
      </Routes>
    </>
  );
};

