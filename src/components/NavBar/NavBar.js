import "./NavBar.css";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import UserWidget from "../UserWidget/UserWidget";
import { useUser } from "../../context/UserContext"
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { userLogged } = useUser();
  
  return (
    <nav id="navbar" className="navbar d-flex align-content-center navbar-expand-lg sticky-top">
      <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
        <span className="dark-blue-text"><i className="fas fa-bars fa-1x" /></span>
      </button>

      <Link id="mainLogo" to='/home' >
        <h1>TECNO <span>PLUS</span></h1>
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent1">
        <ul className="d-flex main-nav-items mb-0">
          <Link to='/category/apple' ><li className="nav-item">APPLE</li></Link>
          <Link to='/category/hp' ><li className="nav-item">HP</li></Link>
          <Link to='/category/dell' ><li className="nav-item">DELL</li></Link>
      </ul>
      </div>

      <div className="d-flex nav-buttons">
        <Link to='/cart' className="d-flex" ><CartWidget /></Link>
        <Link to={userLogged ? '/myAccount' : '/myAccount/signIn'} className="d-flex justify-content-center user"><UserWidget /></Link>
      </div>
    </nav>
  );
};

export default NavBar;