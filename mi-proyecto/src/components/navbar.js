import React from "react";
import logo from '../assets/logo-trs.png'


function Navbar() {
    return (
    <div className="navbar">
        <img classname='logo' src={logo} />;
        <ul className="elementos">
            <li><a href="#Productos">Productos</a></li>
            <li><a href="#Usuarios">Usuarios</a></li>
            <li><a href="#Categorias">Categorias</a></li>
        </ul>
    </div>
    );
  }

export default Navbar;