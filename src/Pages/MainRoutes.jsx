import React from "react";
import { Routes,Route } from "react-router-dom";
import {Homepage} from "../Pages/Homepage"
export const MainRoutes = () => {
    return <>
      <Routes>
  <Route path="/" element={<Homepage/>}></Route>
  <Route path="*" element={<h1>Page is Not found</h1>}></Route>

    </Routes>
    </>
    
  
  };
  