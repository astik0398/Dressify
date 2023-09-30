import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../../src/images/icons8-menu.svg'
import  img  from '../../src/images/Dressify (1).png'
import './navbar.css'

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)



  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo"   style={{width:"30px",}}  >
          <img src={img} alt="" />
        </div>
   
        <div
         className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/collection">Collection</NavLink>
            </li>
              <NavLink to="/blog">Blog</NavLink>
            <li>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

