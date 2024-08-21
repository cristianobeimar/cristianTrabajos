import React from "react";
import { useEffect, useState } from "react";
import Carrito from "../../components/CarritoCompras/compras";
import "./Ruta.css";
import Navegacion from "../../components/Navegacion/navegacion";
import BuscadorComponent from "../../components/Buscador/BuscadorComponent";

const CardProducts = ({
  image,
  title,
  description,
  inf_opcional,
  price,
  marca,
  origen,
  color,
  dimensiones,
  peso,
  garantia,
  material,

  numeroCarrito,
  item,
  id,
}) => {
  const validPrice =
    !isNaN(price) && price !== undefined && price !== null ? Number(price) : 0;
  const priceBefore = validPrice + validPrice / 2;
  return (
    <>
      
      <div className="principal">
        <Navegacion />
        <div className="buscar">
          <BuscadorComponent datos={[]} />
        </div>
        <div className="title">
          <h3 className="titulo">Total Market</h3>
        </div>
        <div className="conten_product_view">
          <img className="image_product_view" src={image} alt={"superhero"} />

          <div className="datos_product_view">
            <div className="row no-gutters">
              <h4 className="card-title">{marca}</h4>
              <h4 className="card-title">{title}</h4>
              <p className="card-text">{description}</p>
              <p className="card-text">{inf_opcional}</p>
              <p className="card-text">{origen}</p>
              <p className="card-text">{color}</p>
              <p className="card-text">{dimensiones}</p>
              <p className="card-text">{peso}</p>
              <p className="card-text">{garantia}</p>
              <p className="card-text">{material}</p>
              <div className="price_producto">
                <p className="price">
                  ${validPrice.toFixed(2)}{" "}
                  <span className="price-before">
                    ${priceBefore.toFixed(2)}
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>

          {/* <div className="">
        <Carrito numeroCarrito={numeroCarrito} item={item} />
        </div> */}
        </div>{" "}
      </div>
    </>
  );
};
export default CardProducts;
