import React, {useRef} from 'react';
import "./ExtraItems.css";
import { useSelector } from 'react-redux';

// let products = [
//     {image: "https://pinkbuddha.s3.ap-south-1.amazonaws.com/images/product-img/thumb/boysenberry-georgette-frock-1695617768.jpg"},
//     {image: "https://pinkbuddha.s3.ap-south-1.amazonaws.com/images/product-img/thumb/boysenberry-georgette-frock-1695617768.jpg"},
//   ];

export const ExtraItems = () => {

  const prod = useSelector((store) => store.ProductReducer.products);
    
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft -= 500; // Adjust the scroll distance as needed
      }
    };
  
    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 500; // Adjust the scroll distance as needed
      }
    };
  
    return (
      <>
      <h2 style={{textAlign: "left"}}>Recently Added</h2>
      <div className="product-carousel">
        <button className='pre-btn' onClick={scrollLeft}>&lt; Scroll Left</button>
        <div className="scroll-container" ref={scrollContainerRef}>
          {prod.map((element, index) => (
            <div class="product-card">
                    <div class="product-image">
                        <img src={element.item[0]?.img1} class="product-thumb" alt="" />
                    </div>
                    <div class="product-info">
                        <h5 class="broduct-brand">{element.name}</h5>
                        <span class="price">₹{element.price}</span>
                    </div>
                </div>
          ))}
        </div>
        <button className='next-btn' onClick={scrollRight}>Scroll Right &gt;</button>
      </div>
      </>
    )
}
