import React, { useEffect, useState } from "react";
import "./Product.css";

const Product = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch("https://fakestoreapi.com/products/1");
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }

    getProduct();
  }, []);

  return (
    <div className="product-card">
      <img src={product.image} alt="" />
      <div className="product-data">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-numbers">
          <p className="price">
            ${product.price}{" "}
            <span className="price-before">
              {product.price + product.price / 2}
            </span>{" "}
          </p>
          <p className="rating">{product?.rating?.rate | ""}</p>
        </div>
      </div>
      <button>Comprar</button>
    </div>
  );
};

export default Product;
