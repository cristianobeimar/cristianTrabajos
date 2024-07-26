import { useState } from "react";
import FormLogin from "../FormLogin/FormLogin";
import "./navegacion.css";
import Logo from'../../assets/img.rgb.png'
// import Navegacion from "./navegacion"
// import img from '../../assets/imagen-logo.png'

export default function Navegacion() {
  return (
    <>
      <header className="header">
        <img className= "logo" src={Logo} alt="" />
        <nav id="nav" className="nav">
          <a href="">Men clothes</a>
          <a href="">Woman clothes</a>
          <a href="">Technological articles</a>
          <a href="">Jewelry</a>
          {/* <a href="login.html"></a> */}
          <FormLogin />
        </nav>
        <button className="class-menu-btn" id="menu-btn">
          &#9776;
        </button>
      </header>
    </>
  );
}
