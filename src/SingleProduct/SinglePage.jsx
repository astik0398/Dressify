import React from 'react';
import "./SinglePage.css"
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


export const SinglePage = () => {

    const prod = useSelector((store) => store.ProductReducer.products);
    const [singleData, setSingleData] = useState({});
  
    const { id } = useParams();
  
    useEffect(() => {
      const prodata = prod.find((item) => item.id === +id)
      console.log(prodata)
      prodata && setSingleData(prodata)
    }, []);
    

    let obj = {
        img1: "https://static.zara.net/photos///2022/I/0/1/p/8779/400/712/2/w/750/8779400712_2_1_1.jpg?ts=1657273842773",
        img2: "https://static.zara.net/photos///2022/I/0/1/p/8779/400/712/2/w/750/8779400712_2_2_1.jpg?ts=1657273824889",
        img3: "https://static.zara.net/photos///2022/I/0/1/p/3046/173/800/12/w/750/3046173800_2_3_1.jpg?ts=1666021153970",
        img4: "https://static.zara.net/photos///2022/I/0/1/p/8779/400/712/2/w/750/8779400712_6_2_1.jpg?ts=1657280282729",
      };


    const [active, setActive] = useState(2);
    const styles = { gridColumn: "1/4", gridRow: "1/4" };
    const handleClick = (a) => {
        setActive(a)
    };

    // for selecting size------
    const [size, setSize] = useState("S");
    const handleSize = (s) => {
        setSize(s)
    };


  return (
    <div className='single-wrapper'>  
        <div
        className="all-img">
            <div style={active == 1 ? styles : {}} onClick={() => handleClick(1)}>
                <img src={obj.img1} alt="" />
            </div>
            <div style={active == 2 ? styles : {}} onClick={() => handleClick(2)}>
                <img src={obj.img2} alt="" />
            </div>
            <div style={active == 3 ? styles : {}} onClick={() => handleClick(3)}>
                <img src={obj.img3} alt="" />
            </div>
            <div style={active == 4 ? styles : {}} onClick={() => handleClick(4)}>
                <img src={obj.img4} alt="" />
            </div>
        </div>

        <div className='details-wrapper'>
            <h1>{singleData.name}</h1>
            <br />
            <p>{singleData.detail}</p>
            <br />
            <h3>Rating</h3>
            <br />
            <h3>₹{singleData.price}</h3>
            <br />
            <div>
                <h3>Select Size</h3>
                <br />
                <div className='button'>
                    <button className={size === "XS"? "act-btn" : 'size-button'} onClick={() => handleSize("XS")} >XS</button>
                    <button className={size === "S"? "act-btn" : 'size-button'} onClick={() => handleSize("S")} >S</button>
                    <button className={size === "M"? "act-btn" : 'size-button'} onClick={() => handleSize("M")} >M</button>
                    <button className={size === "L"? "act-btn" : 'size-button'} onClick={() => handleSize("L")} >L</button>
                    <button className={size === "XL"? "act-btn" : 'size-button'} onClick={() => handleSize("XL")} >XL</button>
                </div>
            </div>
            <br />
            <div>
                <h3>Colors Available</h3>
                <br />
                <div className='button'>
                    {singleData.item?.map((el) => (
                        <button className='color-button' style={{background: el.color}}></button>
                    ))}
                </div>
            </div>
            <br />
            <div>
                <button className='buy-button'>
                    Buy This Product
                </button>
            </div>
        </div>
        
    </div>
  )
}
