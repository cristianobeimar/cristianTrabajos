import React, { useEffect, useState } from "react";
import "./App1.css";
import "./index.css";
import Getproductos from "./components/Getproductos";
import Navegacion from "./components/Navegacion/navegacion";
import CardProducts from "./components/CardProducts/CardProducts";
import Buscador from "./components/Buscador/BuscadorComponent";
import { useContext } from "react";
// import {Formulario} from "./components";

function App() {
  const [productos, setproductos] = useState([]);
  const [joyas, setJoyas] = useState([]);
  const [electrodomésticos, setElectrodomésticos] = useState([]);
  const [ropaHombre, setRopaHombre] = useState([]);
  const [ropaMujer, setRopaMujer] = useState([]);

  const funcionProducts = async () => {
    const productos = await Getproductos();
    setproductos(productos);
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
        <h3 className="titulo">Total Market</h3>
      </div>

      <h2 id="joyas">Joyas</h2>
      <div className="content">
        {joyas.map((e, i) => {
          return (
            <CardProducts
              numeroCarrito={numeroCarrito}
              {...e}
              key={i}
              item={e}
            />
          );
        })}
      </div>

      <section id="electronica">
        <h2>Articulos electronicos</h2>
        <div className="content">
          {electrodomésticos.map((e, i) => {
            return (
              <CardProducts
                numeroCarrito={numeroCarrito}
                {...e}
                key={i}
                item={e}
              />
            );
          })}
        </div>
      </section>

      <section id="ropa_hombre">
        <h2>Ropa hombre</h2>
        <div className="content">
          {ropaHombre.map((e, i) => {
            return (
              <CardProducts
                numeroCarrito={numeroCarrito}
                {...e}
                key={i}
                item={e}
              />
            );
          })}
        </div>
      </section>

      <section id="ropa_mujer">
        <h2>Ropa Mujer</h2>
        <div className="content">
          {ropaMujer.map((e, i) => {
            return (
              <CardProducts
                numeroCarrito={numeroCarrito}
                {...e}
                key={i}
                item={e}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default App;
