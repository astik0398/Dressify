import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../../src/Images/icons8-menu.svg'
import  img  from '../../src/Images/Dressify__1_-removebg-preview (1).png'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '@chakra-ui/avatar'
import { logout } from '../Redux/AuthReducer/action'
import { Button } from '@chakra-ui/button'
import './navbar.scss'

export const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false)
  const isAuth = useSelector(store=> store.authReducer.isAuth)
  const username = useSelector(store=> store.authReducer.username)

  const dispatch = useDispatch()

  return (
    <nav className="navbar">
      <div className="container" style={{width:"100%" ,display:"flex" 
      , justifyContent:"space-around",alignItems:"center"}}>
        <div className="logo"  style={{width:"20%",display:"flex" ,flexDirection:'row',
          justifyContent:"center",alignItems:"center"}}>
          <img  style={{width:"100px",paddingTop:"10px"}}  src={img} alt=""  />
        </div>

   
        <div className='nav-menu'
          >
        <button className='open'>Menu</button>
          <ul>
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
          justifyContent:"space-evenly",alignItems:"center"}} className='hhhhh'>

            {/* <h3>{username}</h3> */}
            {isAuth ? <Avatar bg={'#13162f'} textColor={'white'} padding={'8px'} name={username} border={'1px solid white'} borderRadius={'100%'}/>: null}
          
      {isAuth ? (<NavLink  to={"/signin"}> <button onClick={()=> dispatch(logout)} style={{textDecoration:"none",fontFamily:"sans-serif",border:"none",borderRadius:"12px",
            fontSize:"14px",  background:"green", color:"white" ,padding:"12px 30px"}} >
              Log out</button></NavLink>) : (<NavLink  to={"/signin"}> <button style={{textDecoration:"none",fontFamily:"sans-serif",border:"none",borderRadius:"4px",
            fontSize:"14px",  background:"#3b3838", color:"white" ,padding:"12px 30px" , width:"100px"}} >
              Log in</button></NavLink>)}

<NavLink to={"/cart"}>
  
       {isAuth && <button style={{textDecoration:"none",fontFamily:"sans-serif",border:"none",borderRadius:"10px",
            fontSize:"14px",  background:"#ff7112", color:"white" ,padding:"12px 30px" }} >
              Cart</button>}
</NavLink>
       {/* <Link to={"/single/:id"}>SinglePage</Link> */}
          </div>
      
      </div>
    </nav>
  )
}

