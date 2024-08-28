import { useEffect, useState } from "react";
import FormLogin from "../FormLogin/FormLogin";
import "./navegacion.css";
import Logo from "../../assets/img.rgb.png";
import CarritoTarjeta from "../BerCarrito/carritoTarjeta";
import Carrito from "../CarritoCompras/compras";
import BuscadorComponent from "../Buscador/BuscadorComponent";
import { useNavigate } from "react-router-dom";
import Inicio from "../../pages/inicioPagina/Inicio";

export default function Navegacion({ longitudNum = 0, setactivo }) {
  const [activo, setActivo] = useState(false);
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [open, setOpen] = useState(false)

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
      window.removeEventListener(
        "carritoActualizado",
        handleCarritoActualizado
      );
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

  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        {/* <p id ="busca"><BuscadorComponent/></p> */}
        <img className="logo" src={Logo} alt="" />
        <div>
          <h3
            style={{
              fontSize: "30px",
              color: "#fff",
              padding: "0",
              margin: "0",
              marginLeft: "10px",
            }}
            id="titulo"
          >
            Total Market
          </h3>
        </div>
        <nav id="nav" className="nav">
          {open && <div className="nav--typeProducts container_menu_responsive">
            <a onClick={() => navigate("/ropa-hombre")}>Ropa Hombre</a>
            <a onClick={() => navigate("/ropa-mujer")}>Ropa Mujer</a>
            <a onClick={() => navigate("/Articulos-electronicos")}>
              Articulos tecnologicos
            </a>
            <a onClick={() => navigate("/joyas")}>Joyas</a>
          </div>}
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
          <button onClick={() => navigate("/")} className="house">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
            </svg>
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
          <button onClick={()=> setOpen(! open)} className="class-menu-btn" id="menu-btn">
            &#9776;
          </button>
        </nav>
      </header>
    </>
  );
}
