import { useEffect, useState } from "react";
import FormLogin from "../FormLogin/FormLogin";
import "./navegacion.css";
import Logo from "../../assets/img.rgb.png";
import CarritoTarjeta from "../BerCarrito/carritoTarjeta";
import Carrito from "../CarritoCompras/compras";

export default function Navegacion({ longitudNum = 0 }) {
  const [activo, setActivo] = useState(false);
  const [productosCarrito, setProductosCarrito] = useState([]);

  const productosCarritos = JSON.parse(
    localStorage.getItem("productosGuardados")
  );

  useEffect(() => {
    const productosGuardados =
      JSON.parse(localStorage.getItem("productosGuardados")) || [];
    setProductosCarrito(productosGuardados);

    // Escuchar el evento personalizado
    const handleCarritoActualizado = () => {
      const productosActualizados =
        JSON.parse(localStorage.getItem("productosGuardados")) || [];
      setProductosCarrito(productosActualizados);
    };

    window.addEventListener("carritoActualizado", handleCarritoActualizado);

    // Cleanup
    return () => {
      window.removeEventListener("carritoActualizado", handleCarritoActualizado);
    };
  }, []);

  const toggleModal = () => {
    setActivo(!activo);
  };

  const actualizarCarrito = (productosActualizados) => {
    setProductosCarrito(productosActualizados);
    localStorage.setItem(
      "productosGuardados",
      JSON.stringify(productosActualizados)
    );
    if (productosActualizados.length === 0) {
      setActivo(false);
    }
  };

  return (
    <>
      <header className="header">
        <img className="logo" src={Logo} alt="" />
        <nav id="nav" className="nav">
          <div className="nav--typeProducts">
            <a href="#ropa_hombre">Ropa Hombre</a>
            <a href="#ropa_mujer">Ropa Mujer</a>
            <a href="#electronica">Articulos tecnologicos</a>
            <a href="#joyas">Joyas</a>
          </div>
          <FormLogin />
          <button
            onClick={() => (productosCarrito.length > 0 ? toggleModal() : "")}
            className="carrito"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            <p className="numero absolute top-[-10px] left-[30px] w-[30px] h-[20px] rounded-full bg-red-600">
              {productosCarrito.length}
            </p>
          </button>
          {activo && productosCarrito.length >= 1 && (
            <div className="mascara_Carrito">
              {productosCarrito.map((item, i) => (
                <div key={i}>
                  <CarritoTarjeta
                    {...item}
                    item={item}
                    cantidad={item.cantidad}
                    actualizarCarrito={actualizarCarrito}
                  />
                </div>
              ))}
            </div>
          )}
          <button className="class-menu-btn" id="menu-btn">
            &#9776;
          </button>
        </nav>
      </header>
    </>
  );
}
