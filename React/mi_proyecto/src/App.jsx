import React, { useEffect, useState } from "react";
import "./App1.css";
import Getproductos from "./components/Getproductos";
import Navegacion from "./components/Navegacion/navegacion";
import { CardProductos } from "./components/CardProducts/CardProductos";
// import {Formulario} from "./components";

function App() {
  const [products, setproducts] = useState([]);
  const [Jewelery, setJewelery] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [menclothing, setmenclothing] = useState([]);
  const [Womanclothing, setwomanclothing] = useState([]);

  const funcionProducts = async () => {
    const productos = await Getproductos();
    setproducts(productos);
  };

  const funcionMenclothing = () => {
    const menclothing = products.filter((e) => {
      return e.category === "men's clothing";
    });
    setmenclothing(menclothing);
  };

  const funcionwomanclothing = () => {
    const womanclothing = products.filter((e) => {
      return e.category === "women's clothing";
    });
    setwomanclothing(womanclothing);
  };

  const funcionJewelary = () => {
    const jewelery = products.filter((e) => {
      return e.category === "jewelery";
    });
    setJewelery(jewelery);
  };

  const funcionElectronics = () => {
    const electronics = products.filter((e) => {
      return e.category === "electronics";
    });
    setElectronics(electronics);
  };

  useEffect(() => {
    funcionProducts();
    funcionJewelary();
    funcionElectronics();
    funcionMenclothing();
    funcionwomanclothing();
  }, [products]);

  return (
    <>
      <Navegacion />
      <div className="buscar">
      <input type="text" placeholder="Search Products..." />
      </div>

      <div className="title">
        <h1 className="titulo">Moda y bellesa</h1>
      </div>
      <div className="jewelery">
        <h1>Jewelery</h1>
      </div>

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

      <h1>Men clothes</h1>
      <div className="content">
        {menclothing.map((e, i) => {
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

      <h1>Woman clothes</h1>
      <div className="content">
        {Womanclothing.map((e, i) => {
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
