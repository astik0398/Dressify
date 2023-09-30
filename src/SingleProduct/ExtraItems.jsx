import React, {useRef} from 'react';
import "./ExtraItems.css";

let products = [
    {image: "https://pinkbuddha.s3.ap-south-1.amazonaws.com/images/product-img/thumb/boysenberry-georgette-frock-1695617768.jpg"},
    {image: "https://pinkbuddha.s3.ap-south-1.amazonaws.com/images/product-img/thumb/boysenberry-georgette-frock-1695617768.jpg"},
    {image: "https://pinkbuddha.s3.ap-south-1.amazonaws.com/images/product-img/thumb/boysenberry-georgette-frock-1695617768.jpg"},
    {image: "https://pinkbuddha.s3.ap-south-1.amazonaws.com/images/product-img/thumb/boysenberry-georgette-frock-1695617768.jpg"},
    {image: "https://pinkbuddha.s3.ap-south-1.amazonaws.com/images/product-img/thumb/boysenberry-georgette-frock-1695617768.jpg"},
    {image: "https://pinkbuddha.s3.ap-south-1.amazonaws.com/images/product-img/thumb/boysenberry-georgette-frock-1695617768.jpg"},
    {image: "https://pinkbuddha.s3.ap-south-1.amazonaws.com/images/product-img/thumb/boysenberry-georgette-frock-1695617768.jpg"},
    {image: "https://pinkbuddha.s3.ap-south-1.amazonaws.com/images/product-img/thumb/boysenberry-georgette-frock-1695617768.jpg"},
    {image: "https://pinkbuddha.s3.ap-south-1.amazonaws.com/images/product-img/thumb/boysenberry-georgette-frock-1695617768.jpg"},
  ];

export const ExtraItems = () => {
    
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
      <h1 style={{textAlign: "left"}}>Recently Added</h1>
      <div className="product-carousel">
        <button className='pre-btn' onClick={scrollLeft}>&lt; Scroll Left</button>
        <div className="scroll-container" ref={scrollContainerRef}>
          {products.map((element, index) => (
            <div key={index} className='item-card'>
                <img src={element.image} alt='' />
            </div>
          ))}
        </div>
        <button className='next-btn' onClick={scrollRight}>Scroll Right &gt;</button>
      </div>
      </>
    )
}
