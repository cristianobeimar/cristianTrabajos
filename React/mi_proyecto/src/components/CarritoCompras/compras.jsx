import { useEffect, useState } from "react";
import React from "react";

export const Carrito = ({ item, numeroCarrito }) => {
  const [Productos, setProductos] = useState([]);
  const [res, setRes] = useState([]);
  const [activo, setActivo] = useState(false);
  // con esto puedo Cargar los productos del localStorage al iniciar el componente

  const carrito = JSON.parse(localStorage.getItem("productosGuardados"));

  useEffect(() => {
    if (!carrito) {
      localStorage.setItem("productosGuardados", JSON.stringify([]));
    }
  }, []);
  // console.log(item);
  const agregarCarrito = (item) => {
    console.log(item);
    const productosGuardados = JSON.parse(
      localStorage.getItem("productosGuardados")
    );
    const prod = [...productosGuardados, item];
    setProductos(prod);
    localStorage.setItem("productosGuardados", JSON.stringify(prod));
    numeroCarrito();
  };

  return (
    <>
      <button className="rating" onClick={() => agregarCarrito(item)}>
        comprar
      </button>
    </>
  );
};

export default Carrito;
