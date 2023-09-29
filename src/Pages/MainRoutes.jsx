import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import Product from "../Components/Product";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import Admin from "../Components/Admin";
export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="*" element={<h1>Page is Not found</h1>}></Route>

        <Route path="/products" element={<Product />} />

        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </>
  );
};
