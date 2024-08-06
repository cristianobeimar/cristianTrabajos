import React, { useEffect, useState } from "react";
import "./App1.css";
import Getproductos from "./components/Getproductos";
import Navegacion from "./components/Navegacion/navegacion";
import { CardProductos } from "./components/CardProducts/CardProductos";
import Buscador from "./components/Buscador/BuscadorComponent";
// import {Formulario} from "./components";

function App() {
  const [productos, setproductos] = useState([]);
  const [joyas, setJoyas] = useState([]);
  const [electrodomésticos, setElectrodomésticos] = useState([]);
  const [ropaHombre, setRopaHombre] = useState([]);
  const [ropaMujer, setRopaMujer] = useState([]);

  const funcionProducts = async () => {
    const productose = await Getproductos();
    setproductos(productose);
    console.log(productose);
    
  };

  const funcionMenclothing = () => {
    const ropaHombre = productos.filter((e) => {
      return e.CATEGORIA === "Ropa Hombre";
    });
    setRopaHombre(ropaHombre);
  };

  const funcionwomanclothing = () => {
    const ropaMujer = productos.filter((e) => {
      return e.CATEGORIA === "Ropa Mujer";
    });
    setRopaMujer(ropaMujer);
  };

  const funcionJewelary = () => {
    const joyas = productos.filter((e) => {
      return e.CATEGORIA === "Joyas";
    });
    setJoyas(joyas);
  };

  const funcionElectronics = () => {
    const electrodomesticos = productos.filter((e) => {
      return e.CATEGORIA === "Electrodomésticos";
    });
    setElectrodomésticos(electrodomesticos);
  };

  useEffect(() => {
    funcionProducts();
    funcionJewelary();
    funcionElectronics();
    funcionMenclothing();
    funcionwomanclothing();
  }, [productos]);
  const [longitudNum, setlongitudNum] = useState(null);

  useEffect(() => {
    const num = JSON.parse(localStorage.getItem("productosGuardados")) || [];
    setlongitudNum(num.length);
  }, []);

  const numeroCarrito = () => {
    const num = JSON.parse(localStorage.getItem("productosGuardados"));
    setlongitudNum(num.length);
  };

  return (
    <>
      <Navegacion longitudNum={longitudNum} />
      <div className="buscar">
        <Buscador datos={productos} />
      </div>

      <div className="title">
        <h2 className="titulo">Moda y bellesa</h2>
      </div>
      
      <section id="joyas">
        <h1>Joyas</h1>
        <div className="content">
          {joyas.map((e, i) => {
            return (
              <CardProductos numeroCarrito={numeroCarrito} {...e} key={i} />
            );
          })}
        </div>
      </section>

      <section id="electronica">
        <h1>Articulos electronicos</h1>
        <div className="content">
          {electrodomésticos.map((e, i) => {
            return (
              <CardProductos numeroCarrito={numeroCarrito} {...e} key={i} />
            );
          })}
        </div>
      </section>

      <section id="ropa_hombre">
        <h1>Ropa hombre</h1>
        <div className="content">
          {ropaHombre.map((e, i) => {
            return (
              <CardProductos numeroCarrito={numeroCarrito} {...e} key={i} />
            );
          })}
        </div>
      </section>

      <section id="ropa_mujer">
        <h1>Ropa Mujer</h1>
        <div className="content">
          {ropaMujer.map((e, i) => {
            return (
              <CardProductos numeroCarrito={numeroCarrito} {...e} key={i} />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default App;
