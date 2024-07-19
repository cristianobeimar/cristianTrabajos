import { useState } from "react";
import FormLogin from "../FormLogin/FormLogin";
import "./navegacion.css";

// import Navegacion from "./navegacion"
export default function Navegacion() {
  return (
    <>
      <header className="header">
        <img className= "logo" src="https://cdn.pixabay.com/photo/2013/07/12/19/26/intersection-154782_1280.png" alt="" />
        <nav id="nav" className="nav">
          <a href="">Men clothes</a>
          <a href="">Woman clothes</a>
          <a href="">Technological articles</a>
          <a href="">Jewelry</a>
          <a href="login.html"></a>
          <FormLogin />
        </nav>
        <button class="class-menu-btn" id="menu-btn">
          &#9776;
        </button>
      </header>
    </>
  );
}
