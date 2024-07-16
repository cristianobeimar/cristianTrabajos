import { useState } from "react";
import FormLogin from "./FormLogin";

export default function Navegacion() {
  return (
    <>
      <header className="header">
        <nav id="nav" className="nav">
          <a href="">Men clothes</a>
          <a href="">Woman clothes</a>
          <a href="">Technological articles</a>
          <a href="">Jewelry</a>
          <a href="login.html"></a>
          <FormLogin />
        </nav>
        <button class="class-menu-btn" id="menu-btn">&#9776;</button>
      </header>
    </>
  );
}


