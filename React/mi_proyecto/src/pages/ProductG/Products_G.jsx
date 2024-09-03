import React, { useEffect, useState } from "react";
import Getproductos from "../../components/Getproductos";
import styles from "./ProductG.module.css";

const Products_G = () => {
  const [prod, setProd] = useState([]);

  const funcionproductos = async () => {
    const products = await Getproductos();
    setProd(products);
  };

  useEffect(() => {
    funcionproductos();
  }, []); // Asegúrate de pasar un array vacío 
          //para que solo se ejecute una vez al montar el componente

  return (
    <div className={styles.product_container}>
      {prod?.map((item) => {
        return (
          <div className={styles.product} key={item.id}>
            <div className={styles.targ_image}> {/*Asegúrate de que cada elemento tenga un key único*/}
            <img className={styles.product_image} src={item.image} alt={item.title} />
            </div>
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Products_G;