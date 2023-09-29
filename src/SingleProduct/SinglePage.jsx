import React from 'react';
import "./SinglePage.css"
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export const SinglePage = () => {


    const prod = useSelector((store) => store.ProductReducer.products);
    const [singleData, setsingleData] = useState({});
  
  
    const { id } = useParams();
  
    useEffect(() => {
      const prodata = prod.find((item) => item.id === +id)
      console.log(prodata)
      prodata && setsingleData(prodata)
    }, []);
  




  return (
    <div className='single-wrapper'>

<h1> adil check single data{singleData.name}</h1>   

        <div className='image-wrapper'>
            <img className='image' src="https://cdn.shopify.com/s/files/1/1232/6200/products/17087_1.jpg" alt="" />
        </div>

        <div className='details-wrapper'>
            <h1>Name of Product</h1>
            <p>Details of product</p>
            <h2>Rating</h2>
            <h3>Price of product</h3>
            <div>
                <h3>Select Size</h3>
                <div className='button'>
                    <button className='size-button'>XS</button>
                    <button className='size-button'>S</button>
                    <button className='size-button'>M</button>
                    <button className='size-button'>L</button>
                    <button className='size-button'>XL</button>
                </div>
            </div>

            <div>
                <h3>Colors Available</h3>
                <div className='button'>
                    <button className='color-button'></button>
                    <button className='color-button'></button>
                    <button className='color-button'></button>
                    <button className='color-button'></button>
                </div>
            </div>

            <div>
                <button className='buy-button'>
                    Buy This Product
                </button>
            </div>
        </div>
        
    </div>
  )
}
