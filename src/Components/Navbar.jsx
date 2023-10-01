import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../../src/Images/icons8-menu.svg'
import  img  from '../../src/Images/Dressify__1_-removebg-preview (1).png'
// import './navbar.css'

export const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false)
  

  return (
    <nav className="navbar">
      <div className="container" style={{width:"100%" ,display:"flex" 
      , justifyContent:"space-around",alignItems:"center"}}>
        <div className="logo"  style={{width:"20%",display:"flex" ,flexDirection:'row',
          justifyContent:"center",alignItems:"center"}}>
          <img  style={{width:"100px",paddingTop:"10px"}}  src={img} alt=""  />
        </div>
   
        <div  style={{width:"50%"}}
          >
          <ul style={{display:"flex" ,flexDirection:'row',
          justifyContent:"space-evenly",alignItems:"center"}}>
            <li>
              <NavLink style={{textDecoration:"none",fontFamily:"sans-serif",
            fontSize:"16px", fontWeight:"700" , color:"black"}} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink style={{textDecoration:"none",fontFamily:"sans-serif",
            fontSize:"16px", fontWeight:"700" , color:"black"}} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink style={{textDecoration:"none",fontFamily:"sans-serif",
            fontSize:"16px", fontWeight:"700" , color:"black"}} to={"/products"}>Product</NavLink>
            </li>
            <li>
              <NavLink style={{textDecoration:"none",fontFamily:"sans-serif",
            fontSize:"16px", fontWeight:"700" , color:"black"}} to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink style={{textDecoration:"none",fontFamily:"sans-serif",
            fontSize:"16px", fontWeight:"700" , color:"black"}} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
          <div   style={{width:"20%",display:"flex" ,flexDirection:'row',
          justifyContent:"space-evenly",alignItems:"center"}}>
          
      <NavLink  to={"/signin"}> <button style={{textDecoration:"none",fontFamily:"sans-serif",border:"none",borderRadius:"20px",
            fontSize:"14px",  background:"black", color:"white" ,padding:"5px 30px"}} >
              Login</button></NavLink>

<NavLink to={"/cart"}>
  
       <button style={{textDecoration:"none",fontFamily:"sans-serif",border:"none",borderRadius:"20px",
            fontSize:"14px",  background:"black", color:"white" ,padding:"5px 30px"}} >
              Cart</button>
</NavLink>
       {/* <Link to={"/single/:id"}>SinglePage</Link> */}
          </div>
      
      </div>
     
    </nav>
  )
}

