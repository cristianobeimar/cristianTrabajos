import React, { useState, useEffect } from "react";
import "./carritoTarjeta.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { agregarCarrito, modificarCarrito } from "../CarritoCompras/compras";

const CarritoTarjeta = ({
  TITULO,
  IMAGEN,
  DESCRIPCION,
  PRECIO,
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

  const eliminarProducto = (ID_PRODUCTO) => {
    console.log("haciendo eliminando", ID_PRODUCTO);
    const productosGuardados =
      JSON.parse(localStorage.getItem("productosGuardados")) || [];
    const productosActualizados = productosGuardados.filter(
      (producto) => producto.ID_PRODUCTO !== ID_PRODUCTO
    );
    actualizarCarrito(productosActualizados);
  };

  const decrementCart = (ID_PRODUCTO) => {
    console.log("haciendo decremento");

    const c = Cantidad - 1;
    setCantidad(c);
    modificarCarrito(item, c);
    if (c === 0) {
      eliminarProducto(ID_PRODUCTO);
    } else {
      const productosGuardados =
        JSON.parse(localStorage.getItem("productosGuardados")) || [];
      const productosActualizados = productosGuardados.map((producto) =>
        producto.ID_PRODUCTO === ID_PRODUCTO
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
              ? eliminarProducto(item.ID_PRODUCTO)
              : decrementCart(item.ID_PRODUCTO)
          }
        >
          eliminar
        </button>
        <div className="img">
          <img src={IMAGEN} className="img-card" alt={"superhero"} />
        </div>
        {/* datos-producto  */}
        <div className="product-data">
          <div className="row no-gutters">
            <h4 className="card-title">{TITULO}</h4>
            <p className="card-text">
              <small className="text-muted">{DESCRIPCION}</small>
            </p>
            <div className="precio_producto">
              <p className="precio">
                ${PRECIO}{" "}
                <span className="price-before">{PRECIO + PRECIO / 2}</span>{" "}
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
