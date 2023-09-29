import React from "react";
import { getProData } from "../Redux/ProductReducer/action";
import { useEffect } from "react";

import ProductCard from "./ProductCard";
import "../Components/Produc.scss";
import banner1 from "../assets/images/Sangria_Desk_Banner.jpg";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function Product() {
  const [searchParams, setsearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [category, setcategory] = useState(
    searchParams.getAll("category") || []
  );

  const handle_category = (e) => {
    const { value } = e.target;
    if (value == 'all') {
      setsearchParams({});
    }
    else{
      let newCategory = [];
      
      if (newCategory.includes(value)) {
        newCategory = newCategory.filter((ele) => ele !== value);
      } else {
        newCategory.push(value);
      }
      setcategory(newCategory);
    }
    // console.log(category);
  };

  //  sort
  const handle_sort = (e) => {
    const { value } = e.target;
  };

  useEffect(() => {
    let params = {
      category: category,
    };

    setsearchParams(params);
  }, [category]);

  
  useEffect(() => {
    const paramObj = {
      params: {
        category: searchParams.getAll("category"),
      },
    };
    dispatch(getProData(paramObj));
  }, [searchParams]);

  return (
    <div className="Prod_contain">
      <div>
        <div style={{ width: "100%", padding: "30px" }}>
          <img
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 0px 5px",
            }}
            src={banner1}
            alt=""
          />
        </div>
        <div style={{ padding: "0 30px" }}>
          <h1>BIGGEST DEALS ON TOP BRANDS</h1>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "100%",
            padding: "10px 30px",
            position: "sticky",
            top: "0",
            zIndex: "1",
            background: "white",
          }}
        >
          <select
            onChange={handle_category}
            className="select-common"
            name=""
            id=""
          >
            <option value="all">Product Type</option>
            <option value="men">Men</option>
            <option value="kids">Kids</option>
            <option value="women">Women</option>
          </select>

          <select
            onChange={handle_sort}
            className="select-common"
            name=""
            id=""
          >
            {/* <option value="">Price</option> */}
            <option name="sort" value="asc">
              ASC
            </option>
            <option name="sort" value="desc">
              DESC
            </option>
          </select>

          <select className="select-common" name="" id="">
            <option value="">Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input
            style={{ flexGrow: "1" }}
            className="select-common"
            type="text"
            placeholder="Enter Product name"
          />
          <button className="select-common">Search</button>
        </div>
        <ProductCard />
      </div>
    </div>
  );
}

export default Product;
