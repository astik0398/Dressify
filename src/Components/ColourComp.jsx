import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ColourComp({item}) {
    const [activeImage, setactiveImage] = useState("")
    useEffect(() => {
        if (item.item && item.item[0] && item.item[0].img1) {
            setactiveImage(item.item[0].img1)
        }

    }, [item])

    const changeCoulour = (i)=>{
        if (item.item && item.item[i] && item.item[i].img1) {
            setactiveImage(item.item[i].img1)
        }
    }

    const colorMap = {
        black: "rgb(0, 0, 0)",
        blue: "rgb(0, 0, 255)",
        red: "rgb(255, 0, 0)",
        green: "#3f4136",
        pink : "#ffc0cb",
        white : "rgb(255, 255, 255)",
     
        
      };
    

  return (
    <div className="card">
      <div className="img">
        <Link to={`/single/${item.id}`}>
          {" "}
          <img src={activeImage} alt="" />
        </Link>
      </div>
      <div className="top-data">
        <div className="title">
          <div className="name">
            <span>{item.name}</span>
          </div>
          <div className="color">
            {item.item &&
              item.item[1] &&
              item.item[1].img1 &&
              item.item?.map((ele , i) => (
                <span
                  onClick={()=>changeCoulour(i)}
                  style={{
                    backgroundColor: colorMap[ele.color] || ele.color,
                    border: "1px solid black",
                  }}
                >
                  {/* {ele.color} */}
                </span>
              ))}
          </div>
        </div>
       <div style={{display:"flex", justifyContent:"space-between"}}>
       <strong> ₹{item.price}</strong>
        <p className= {item.rating > 4 ? "red" : "green"}> {item.rating}</p>
       </div>
      </div>
      <div>{/* <button className="addtocart">Add to Cart</button> */}</div>
    </div>
     
  );
}

export default ColourComp;
