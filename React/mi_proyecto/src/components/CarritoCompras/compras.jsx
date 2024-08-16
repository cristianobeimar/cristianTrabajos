import { useEffect, useState } from "react";
import React from "react";

export const agregarCarrito = (item, cantidadP) => {
  const productosGuardados =
    JSON.parse(localStorage.getItem("productosGuardados")) || [];

  const prod = [...productosGuardados, item];

  const ElemItem = prod.find(
    (elemento) => elemento.id == item.id
  );

  const cantidad = !cantidadP
    ? ElemItem.cantidad
      ? ElemItem.cantidad + 1
      : 1
    : cantidadP;

  item.cantidad = cantidad;

  const arrayFiltrado = prod.filter(
    (elemento) => elemento.id !== item.id
  );

  // localStorage.setItem(
  //   "productosGuardados",
  //   JSON.stringify([...arrayFiltrado, item])
  // );

  const productosActualizados = [...arrayFiltrado, item];
  localStorage.setItem(
    "productosGuardados",
    JSON.stringify(productosActualizados)
  );

  // Emitir un evento personalizado
  const event = new Event("carritoActualizado");
  window.dispatchEvent(event);
};

export const modificarCarrito = (item, cantidadP) => {
  const productosGuardados =
    JSON.parse(localStorage.getItem("productosGuardados")) || [];

  const index = productosGuardados.findIndex(
    (element) => element.id == item.id
  );
  productosGuardados[index].cantidad = cantidadP;
  console.log(productosGuardados[index]);

  localStorage.setItem(
    "productosGuardados",
    JSON.stringify(productosGuardados)
  );
};

export const Carrito = ({ item, numeroCarrito = () => {} }) => {
  return (
    <>
      <button
        className="rating"
        onClick={() => {
          agregarCarrito(item);
          numeroCarrito();
        }}
      >
        agregar al carrito
      </button>
    </>
  );
};

export default Carrito;
