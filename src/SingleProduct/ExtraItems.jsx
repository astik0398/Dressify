import React from 'react';
import "./ExtraItems.css";

export const ExtraItems = () => {
    const productArr = [
        "https://placehold.co/400",
        "https://placehold.co/400",
        "https://placehold.co/400",
        "https://placehold.co/400",
        "https://placehold.co/400",
        "https://placehold.co/400",
        "https://placehold.co/400",
        "https://placehold.co/400",
    ];


  return (
    <div className='product'>
        <h2 class="product-category">Recently Added </h2>
        <button className="pre-btn"><img src="../../public/arrow.png" alt="" /></button>
        <button className="next-btn"><img src="../../public/arrow.png" alt="" /></button>
        <div className="product-container">
            {
                productArr.map((image, i) => (
                    <div class="product-card" key={i}>
                        <img src={image} alt='' />
                    </div>
                ))
            }
        </div>
    </div>
  )
}
