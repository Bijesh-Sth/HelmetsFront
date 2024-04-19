import React from 'react';
import Logo from '../../Assets/White_logo.png';
import Loggedin from './Navigation Toggles/Loggedin';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {


  return (
    <>
 
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className=" navbar-collapse d-flex justify-content-around" id="navbarSupportedContent">
      <a href="#" className="navbar-brand mt-2 mt-lg-0 ml-4">
        <img
          src={Logo}
          height="25"
          alt="Helmets Shop"
          loading="lazy"
        />
      </a>
      
      <ul className="navbar-nav me-4 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/"} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/shop"} className="nav-link">Shop</Link>
        </li>
        <li className="nav-item">
          <Link to={"/about"} className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link">Contact Us</Link>
        </li>
      </ul>
      
      
      
    <div className="d-flex align-items-center">
      <a href="#" className="text-reset me-4">
        <i className="fa-solid fa-magnifying-glass"></i>
      </a>

        <Link to={"/shop"} className="text-reset me-4 cart-trolley--link navbar-link">
        <FiShoppingCart className='cart-trolley'/>
        <span className='cart-total--item'>0</span>
      </Link>
      <Link to={"/login"} className="text-reset me-4">
      
          <i className="fa-regular fa-user"></i>
        </Link>
        
      {/* If Logged in */}
      <Loggedin/>
    </div>
 </div>
  </div>

</nav>
    </>
  )
}

export default Navbar