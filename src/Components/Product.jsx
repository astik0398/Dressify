import React from "react";

import ProductCard from "./ProductCard";
import "../Components/Produc.scss";
import banner1 from "../assets/images/Sangria_Desk_Banner.jpg"

function Product() {
  return (
    <div
      className="Prod_contain"
    >
      <div>
        <div style={{ width: "100%" , padding:"30px" }}>
          <img style={{ width: "100%" , borderRadius:"16px" , boxShadow: "rgba(100, 100, 111, 0.2) 0px 0px 5px" }} src={banner1} alt="" />
        </div>
        <div style={{padding:"0 30px" }}>
          <h1>BIGGEST DEALS ON TOP BRANDS</h1>
        </div>
        <div style={{display: "flex",gap:"10px", width: "100%" , padding:"10px 30px",position:"sticky",top:"0", zIndex:"1", background:"white" }}>
          <select className="select-common" name="" id="">
            <option value="abcd">Product Type</option>
            <option value="abcd">shirt</option>
            <option value="abcd">jeans</option>
          </select>
          <select className="select-common" name="" id="">
            <option value="abcd">Gender</option>
            <option value="abcd">shirt</option>
            <option value="abcd">jeans</option>
          </select>
          <select className="select-common" name="" id="">
            <option value="abcd">Rating</option>
            <option value="abcd">shirt</option>
            <option value="abcd">jeans</option>
          </select>
          <input style={{flexGrow:"1" }} className="select-common" type="text" placeholder="Enter Product name"/>
          <button className="select-common">Search</button>
        </div>
        <ProductCard />
      </div>
    </div>
  );
}

export default Product;
