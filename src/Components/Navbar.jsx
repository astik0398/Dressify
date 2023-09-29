import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  
  return (
    <DIV>
      
      <Link to={"/"}>Home</Link>
      <Link to={"/products"}>Product</Link>
       <Link to={"/cart"}>Cart</Link>
    </DIV>
  );

};

const DIV = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
`;