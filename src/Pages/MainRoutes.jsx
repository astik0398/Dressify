import React from "react";
import { Routes,Route } from "react-router-dom";
import {Homepage} from "../Pages/Homepage"
import Product from "../Components/Product";
export const MainRoutes = () => {
    return <>
      <Routes>
  <Route path="/" element={<Homepage/>}></Route>
  <Route path="*" element={<h1>Page is Not found</h1>}></Route>
 
   <Route path = "/products" element={<Product/>}/>

    </Routes>
    </>
    
  
  };
  