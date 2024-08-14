import React, { useState, useEffect } from "react";
import "./carritoTarjeta.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { agregarCarrito } from "../CarritoCompras/compras";

const CarritoTarjeta = ({
  TITULO,
  IMAGEN,
  DESCRIPCION,
  PRECIO,
  item,
  cantidad,
  numeroCarrito,
}) => {
  const [productos, setProductos] = useState([]);
  const [Cantidad, setCantidad] = useState(1);
  useEffect(() => {
    setCantidad(cantidad);
    const productosGuardados =
      JSON.parse(localStorage.getItem("productosGuardados")) || [];
    setProductos(productosGuardados);
  }, []);

  const eliminarProducto = (ID_PRODUCTO) => {
    console.log("haciendo eliminando", ID_PRODUCTO);

    // console.log(ID_PRODUCTO);

    const productosActualizados = productos.filter(
      (producto) => producto.ID_PRODUCTO !== ID_PRODUCTO
    );
    setProductos(productosActualizados);
    localStorage.setItem(
      "productosGuardados",
      JSON.stringify(productosActualizados)
    );
    // numeroCarrito();
  };

  const decrementCart = (ID_PRODUCTO) => {
    console.log("haciendo decremento");
    const c = cantidad - 1;
    setCantidad(c);
    agregarCarrito(item, c);

    // item.cantidad = cantidad - 1;
    // const productosActualizados = productos
    //   .map((producto) => {
    //     if (producto.ID_PRODUCTO === ID_PRODUCTO) {
    //       return { ...producto, cantidad: producto.cantidad - 1 };
    //     }
    //     console.log(producto.cantidad);
    //     setCantidad(producto.cantidad);
    //     return producto;
    //   })
    //   .filter((producto) => producto.cantidad > 0);

    // setProductos(productosActualizados);
    // localStorage.setItem(
    //   "productosGuardados",
    //   JSON.stringify(productosActualizados)
    // );
    // numeroCarrito();
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
              <p className="buttons">
               Cantidad:{Cantidad}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CarritoTarjeta;
