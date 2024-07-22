import React, { useEffect, useState } from "react";
import "./App.css";
import Getproductos from "./components/Getproductos";
import Navegacion from "./components/Navegacion/navegacion";
import { CardProductos } from "./components/CardProducts/CardProductos";
// import {Formulario} from "./components";

function App() {
  const [products, setproducts] = useState([]);
  const [Jewelery, setJewelery] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const funcionProducts = async () => {
    const productos = await Getproductos();
    setproducts(productos);
  };

  const funcionJewelary = () => {
    const jewelery = products.filter((e) => {
      return e.category === "jewelery";
    });
    setJewelery(jewelery);
  };

  const funcionElectronics = () => {
    const jewelery = products.filter((e) => {
      return e.category === "electronics";
    });
    setElectronics(jewelery);
  };

  useEffect(() => {
    funcionProducts();
    funcionJewelary();
    funcionElectronics();
  }, [products]);

  return (
    <>
      <Navegacion />
      <h1>Moda y bellesa</h1>
      <h1>Jewelery</h1>
      <div className="content">
        {Jewelery.map((e, i) => {
          return (
            <CardProductos
              key={i}
              title={e.title}
              imagen={e.image}
              description={e.description}
              Precio={e.price}
            />
          );
        })}
      </div>
      <h1>electronics</h1>
      <div className="content">
        {electronics.map((e, i) => {
          return (
            <CardProductos
              key={i}
              title={e.title}
              imagen={e.image}
              description={e.description}
              Precio={e.price}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
