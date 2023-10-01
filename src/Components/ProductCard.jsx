import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import ColourComp from "./ColourComp";

function ProductCard() {
  //   const prod = useSelector((store) => store.ProductReducer.products);

  const { prod, isLoading } = useSelector((store) => {
    console.log(store);
    return {
      prod: store.ProductReducer.products,
      isLoading: store.ProductReducer.isLoading,
    };
  });

  return (
    <>
      {isLoading && <Loader />}
      <div id="cars-data" className="cars-data">
        {prod.length > 0 && prod.map((item) => <ColourComp item={item} />)}
      </div>
    </>
  );
}

export default ProductCard;
