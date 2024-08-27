import React from "react";
import { useEffect, useState } from "react";
import Carrito from "../../components/CarritoCompras/compras";
import "./Tarjetap.css";
import Navegacion from "../../components/Navegacion/navegacion";
import BuscadorComponent from "../../components/Buscador/BuscadorComponent";
import Footer from "../../components/Footer/Footer";
const Products = ({
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
        <div className="conten_product_view">
          <img className="image_product_view" src={image} alt={"superhero"} />

          <div className="datos_product_view">
            <div className="row no-gutters">
              <h4 className="card-title">
                <b>Marca: </b>
                {marca}
              </h4>
              <h4 className="card-title">{title}</h4>
              <p className="card-text">
                <b>Descripcion: </b>
                {description}
              </p>
              <div className="price_producto">
                <p className="price">
                  ${validPrice.toFixed(2)}{" "}
                  <span className="price-before">
                    ${priceBefore.toFixed(2)}
                  </span>{" "}
                </p>
              </div>
              <div className="butons_productos">
              <Carrito numeroCarrito={numeroCarrito} item={item} className="agr_Carrito"/>
              <button className="comprar_product">comprar</button>
              </div>
            </div>
          </div>
          <div className="detalles">
            <h4>caracteristicas del producto</h4>
            <p className="card-text">
              <b>Inf adicional: </b>
              {inf_opcional}
            </p>
            <p className="card-text">
              <b>Origen: </b>
              {origen}
            </p>
            <p className="card-text">
              <b>Color: </b>
              {color}
            </p>
            <p className="card-text">
              <b>Dimenciones: </b>
              {dimensiones}
            </p>
            <p className="card-text">
              <b>Peso: </b>
              {peso}
            </p>
            <p className="card-text">
              <b>Garantia: </b>
              {garantia}
            </p>
            <p className="card-text">
              <b>Material: </b>
              {material}
            </p>
          </div>
        </div>{" "}
       <Footer/>
      </div>
    </>
  );
};
export default Products;
