import React from "react";
import { useEffect, useState } from "react";
import Carrito from "../../components/CarritoCompras/compras";
import "./Ruta.css"

const CardProducts = ({
  image,
  title,
  description,
  price,
  numeroCarrito,
  item,
  id,
}) => {
  const validPrice =
    !isNaN(price) && price !== undefined && price !== null ? Number(price) : 0;
  const priceBefore = validPrice + validPrice / 2;
  return (
    <div className="conten">
      <div className="conten_image">
        <img src={image} alt={"superhero"} />
      </div>
      <div className="datos">
        <div className="row no-gutters">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <div className="price_producto">
            <p className="price">
              ${validPrice.toFixed(2)}{" "}
              <span className="price-before">${priceBefore.toFixed(2)}</span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <Carrito numeroCarrito={numeroCarrito} item={item} />
      </div>
    </div>
  );
};
export default CardProducts;
