import React from 'react';
import "./SinglePage.css"
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';


export const SinglePage = () => {

    const prod = useSelector((store) => store.ProductReducer.products);
    const [singleData, setSingleData] = useState({});
    const [images, setimages] = useState({
      img1: "",
      img2: "",
      img3: "",
      img4: ""
    })

    //  cart
    const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  
    const { id } = useParams();
  
    useEffect(() => {
      const prodata = prod.find((item) => item.id === +id)
      console.log(prodata)
      prodata && setSingleData(prodata)
      prodata && prodata && prodata.item && setimages(prodata.item[0])
    }, []);

    const changeImage = (i) => {
      // console.log(i)
       if( singleData && singleData && singleData.item && singleData.item[i]){
        setimages(singleData.item[i])
       }
    }

    // add to local storage for cart item-----

    const handleAddToCart = (item) => {
        const itemName = item.name.trim().toLowerCase();

        const itemAlreadyInCart = cart.some(
          (cartItem) => cartItem.name.trim().toLowerCase() === itemName
        );
    
        if (itemAlreadyInCart) {
          toast.error("Item is already in the cart.",{
            style: {
              borderRadius: "50px",
              background: "#000428",
              color: "#ffffff",
              padding: "1rem 1.5rem",
              fontWeight: "600",
            },
          });
        } else {
          try {
            const updatedCart = [...cart, { ...item, quantity: 1 }];
    
    
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setCartLength(updatedCart.length);
            toast.success("Added to Cart !", {
                style: {
                  borderRadius: "50px",
                  background: "#000428",
                  color: "#ffffff",
                  padding: "1rem 1.5rem",
                  fontWeight: "600",
                },
              });
          } catch (error) {
            toast.error(error.message, {
                style: {
                  borderRadius: "50px",
                  background: "#000428",
                  color: "#ffffff",
                  padding: "1rem 1.5rem",
                  fontWeight: "600",
                },
              });
          }
        }  
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






    //  cart
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
        setCartLength(storedCart.length);
      }, []);

  return (
    <div className='single-wrapper' style={{minHeight: "100vh"}}>  
        <div
        className="all-img">
            <div style={active == 1 ? styles : {}} onClick={() => handleClick(1)}>
                <img src={images.img1 ? images.img1 : ""} alt="" />
            </div>
            <div style={active == 2 ? styles : {}} onClick={() => handleClick(2)}>
                <img src={images.img2 ? images.img2 : ""} alt="" />
            </div>
            <div style={active == 3 ? styles : {}} onClick={() => handleClick(3)}>
                <img src={images.img3 ? images.img3 : ""} alt="" />
            </div>
            <div style={active == 4 ? styles : {}} onClick={() => handleClick(4)}>
                <img src={images.img4 ? images.img4 : ""} alt="" />
            </div>
        </div>

        <div className='details-wrapper'>
            <h1>{singleData.name}</h1>
            <br />
            <p>{singleData.detail}</p>
            <br />
            <h3>Rating :  {singleData.rating == 1 ? "⭐" : singleData.rating == 2 ? "⭐⭐" : singleData.rating == 3 ? "⭐⭐⭐" : singleData.rating == 4 ? "⭐⭐⭐⭐" : "⭐⭐⭐⭐⭐"}</h3>
            <br />
            <h3 className='price'>₹{singleData.price}</h3>
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
            {singleData?.item?.length > 1 &&             <div>
                <h3>Colors Available</h3>
                <br />
                <div className='button'>
                    {singleData.item?.map((el , i) => (
                        <button className='color-button' onClick={()=>changeImage(i)} style={{background: el.color}}></button>
                    ))}
                </div>
            </div>}

            <br />
            <div>
                <button className='buy-button'
                 onClick={() => handleAddToCart(singleData)}
                >
                    Add to Cart This Product
                </button>
            </div>
        </div>
        
    </div>
  )
}
