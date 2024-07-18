import React, { useEffect } from "react";

const Hola = ({ name = "amigo" }) => {
  console.log("antes del useEffect");

  useEffect(() => {
    console.log("En el useEffect");
  }, [name]);

  console.log("Despues del useEffect");
  return <div>Hola {name}</div>;
};

export default Hola;
