import React, { useState, useEffect } from "react";
import "./carritoTarjeta.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { agregarCarrito, modificarCarrito } from "../CarritoCompras/compras";

const CarritoTarjeta = ({
  title,
  image,
  description,
  price,
  item,
  cantidad,
  actualizarCarrito,
}) => {
  const [Cantidad, setCantidad] = useState(cantidad);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setCantidad(cantidad);
  }, [cantidad]);

  useEffect(() => {
    setCantidad(cantidad);
    const productosGuardados =
      JSON.parse(localStorage.getItem("productosGuardados")) || [];
    setProductos(productosGuardados);
  }, []);

  const eliminarProducto = (id) => {
    console.log("haciendo eliminando", id);
    const productosGuardados =
      JSON.parse(localStorage.getItem("productosGuardados")) || [];
    const productosActualizados = productosGuardados.filter(
      (producto) => producto.id !== id
    );
    actualizarCarrito(productosActualizados);
  };

  const decrementCart = (id) => {
    console.log("haciendo decremento");

    const c = Cantidad - 1;
    setCantidad(c);
    modificarCarrito(item, c);
    if (c === 0) {
      eliminarProducto(id);
    } else {
      const productosGuardados =
        JSON.parse(localStorage.getItem("productosGuardados")) || [];
      const productosActualizados = productosGuardados.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: c }
          : producto
      );
      actualizarCarrito(productosActualizados);
    }
  };

  return (
    <>
      <div className="targ">
        <button
          className="delete"
          onClick={() =>
            Cantidad <= 1
              ? eliminarProducto(item.id)
              : decrementCart(item.id)
          }
        >
          eliminar
        </button>
        <div className="img">
          <img src={image} className="img-card" alt={"superhero"} />
        </div>
        {/* datos-producto  */}
        <div className="product-data">
          <div className="row no-gutters">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">
              <small className="text-muted">{description}</small>
            </p>
            <div className="price_producto">
              <p className="precio">
                ${price}{" "}
                <span className="price-before">{price + price / 2}</span>{" "}
              </p>
              <p className="buttons">Cantidad:{Cantidad}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CarritoTarjeta;
