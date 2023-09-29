import React from "react";

import ProductCard from "./ProductCard";
import "../Components/Produc.scss";

function Product() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "20% 78%", gap:"10px" }}
      className="Prod_contain"
    >
      <div style={{ border: "1px solid red"}}></div>
      <div>
        <ProductCard />
      </div>
    </div>
  );
}

export default Product;
