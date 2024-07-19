import React, { useEffect, useState } from "react";
import "./App.css";
import Getproductos from "./components/Getproductos";
import Navegacion from "./components/Navegacion/navegacion";
import { CardProductos } from "./components/CardProducts/CardProductos";
// import {Formulario} from "./components";
function App() {
  const [products, setproducts] = useState([]);

  const funcionProducts = async () => {
    const productos = await Getproductos();
    setproducts(productos);
  };

  useEffect(() => {
    funcionProducts();
  }, []);

  return (
    <>
      <Navegacion />
      <h1>Moda y bellesa</h1>
      <div className="content">
        {products.map((e) => {
          return (
            <CardProductos
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
