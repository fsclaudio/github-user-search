import React from 'react';
import "./styles.css";
import { Link } from "react-router-dom";

const Navbar=() => (
 <nav className="main-navbar">
    <Link to="/" className="nav-text">Bootcamp DevSuperior </Link> 
 </nav>   
) ;

export default Navbar;