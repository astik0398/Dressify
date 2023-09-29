import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProData } from "../Redux/ProductReducer/action";
import { useEffect } from "react";

function ProductCard() {
  const dispatch = useDispatch();

  const prod = useSelector((store) => store.ProductReducer.products);

  const colorMap = {
    black: "rgb(0, 0, 0)",
    blue: "rgb(0, 0, 255)",
    red: "rgb(255, 0, 0)",
    green: "rgb(0, 255, 60)",
    pink : "rgb(136, 19, 134)",
    white : "rgb(141,85,36)",
 
    
  };

  useEffect(() => {
    dispatch(getProData);
  }, []);

  return (
    <div id="cars-data" className="cars-data">
      {prod.length > 0 &&
        prod.map((item) => (
          <div className="card">
            <div className="img">
              <img src={item.item[0]?.img1} alt="" />
            </div>
            <div className="top-data">
              <div className="title">
                <div className="name">
                  <span>{item.name}</span>
                </div>
                <div className="color" >
                  {item.item?.map((ele) => (
                    <span
                      style={{
                        backgroundColor: colorMap[ele.color] || ""
                      }}
                    >
                   
                    </span>
                  ))}
                </div>
              </div>
              <strong> ₹ {item.price}</strong>
            </div>
            <button className="addtocart">Add to Cart</button>
          </div>
        ))}
    </div>
  );
}

export default ProductCard;
