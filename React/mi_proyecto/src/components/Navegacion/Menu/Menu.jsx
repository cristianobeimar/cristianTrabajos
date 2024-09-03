import React from "react";
import MenuWeb from "./MenuWeb/MenuWeb";
import MenuMovile from "./MenuMovile/MenuMovile";
import { useState } from "react";

const Menu = () => {
  const [activo, setActivo] = useState([false]);
  const [productosCarrito, setProductosCarrito] = useState([]);

  return (
    <>
      <MenuMovile setActivo={setActivo} />
      <MenuWeb setActivo={setActivo} />
      {!activo && productosCarrito.length >= 1 && (
          <div className={styles.mascara_Carrito}>
            {productosCarrito.map((item, i) => (
              <div key={i}>
                <CarritoTarjeta
                  {...item}
                  item={item}
                  cantidad={item.cantidad}
                  actualizarCarrito={actualizarCarrito}
                />
              </div>
            ))}
          </div>
        )}
    </>
  );
};

export default Menu;
