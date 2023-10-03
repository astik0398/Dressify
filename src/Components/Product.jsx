import React from "react";
import { getProData } from "../Redux/ProductReducer/action";
import { useEffect } from "react";

import ProductCard from "./ProductCard";
import "../Components/Produc.scss";
import banner1 from "../assets/images/Sangria_Desk_Banner.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function Product() {
  const { prodsearch } = useSelector((store) => {
    // console.log(store);
    return {
      prodsearch: store.ProductReducer.products,
    };
  });
  const [searchParams, setsearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [category, setcategory] = useState(
    searchParams.getAll("category") || []
  );
  const initialstate = searchParams.getAll("rating").map(Number); // filter
  const [rating, setRating] = useState(initialstate || []);
  const [order, setorder] = useState(searchParams.get("order") || "");

  const [searchval, setsearchval] = useState("")
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  const handle_category = (e) => {
    const { value } = e.target;
    if (value == "all") {
      setcategory([]);
    } else {
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
    setorder(value);
  };

  //  rating
  const handle_rating = (e) => {
    const newRating = [...rating];
    const value = +e.target.value;
    if (newRating.includes(value)) {
      newRating.splice(newRating.indexOf(value), 1);
    } else {
      newRating.push(value);
    }

    setRating(newRating);
    console.log(newRating)
  };

  //  search

  const handle_change = (e) => {
    // console.log(e.target.value)
    setsearchval(e.target.value)
  };

  // pagination
  const prev_btn = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const next_btn = () => {
    setPage((next) => next + 1);
  };

  const search_prod = () => {
   console.log(searchval)
   fetchdata()
  }

  const fetchdata = ()=>{
    let params = {
      category: category,
      rating: rating,
      page: page,
    };
    searchval.length > 0 && (params.q = searchval);
    order && (params.order = order);

    setsearchParams(params);
  }

  useEffect(() => {
    fetchdata()
  }, [category, order, rating, page]);

  const paramObj = {
    params: {
      category: searchParams.getAll("category"),
      rating: searchParams.getAll("rating"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      q: searchParams.get("q"),
      _page : Number(searchParams.get("page")),
      _limit : 15
    },
  };

  useEffect(() => {
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
        <div id="abcd" className="respon_div">
          <select
            onChange={handle_category}
            className="select-common"
            name="category"
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
            <option value="">Sort</option>
            <option name="sort" value="asc">
              Price low to high
            </option>
            <option name="sort" value="desc">
              Price high to low
            </option>
          </select>

      
          <button className="rating-btn">
            Rating
            <div className="rating">
              <div>
                <input
                  type="checkbox"
                  id="1star"
                  value={1}
                  onChange={handle_rating}
                  checked={rating.includes(1)}
                />
                <label htmlFor="1star">{"\u2605"}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="2star"
                  value={2}
                  onChange={handle_rating}
                  checked={rating.includes(2)}
                />
                <label htmlFor="2star">{"\u2605 \u2605"}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="3star"
                  value={3}
                  onChange={handle_rating}
                  checked={rating.includes(3)}
                />
                <label htmlFor="3star">{"\u2605 \u2605 \u2605"}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="4star"
                  value={4}
                  onChange={handle_rating}
                  checked={rating.includes(4)}
                />
                <label htmlFor="4star">{"\u2605 \u2605 \u2605 \u2605"}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="5star"
                  value={5}
                  onChange={handle_rating}
                  checked={rating.includes(5)}
                />
                <label htmlFor="5star">
                  {"\u2605 \u2605 \u2605 \u2605 \u2605"}
                </label>
              </div>
            </div>
          </button>
          <input
            onChange={(e)=> handle_change(e)}
            style={{ flexGrow: "1" }}
            className="select-common"
            type="text"
            placeholder="Enter Product name"
          />
          <button id="serc_bt_res" onClick={search_prod} className="select-common">
            Search
          </button>
        </div>
        <ProductCard />
       
      <div className="pagination">

       
          <button onClick={() => prev_btn()} >PREV</button>
             <p>{page}</p>
          <button onClick={() => next_btn()} >NEXT</button>
      
      </div>
      </div>
    </div>
  );
}

export default Product;
// https://dressify-server-project.onrender.com/products?_limit=4
// https://dressify-server-project.onrender.com/products?_limit=4&_page=2