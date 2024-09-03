import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormLogin from "../../../FormLogin/FormLogin";
import styles from "./MenuWeb.module.css";
import CarritoTarjeta from "../../../BerCarrito/carritoTarjeta";

const MenuWeb = ({setActivo}) => {
  const navigate = useNavigate();
  const [productosCarrito, setProductosCarrito] = useState([]);
  
  const carritoModal = () => {
    setActivo(true);
  };
  return (
    <nav id="nav" className={styles.container_menu_web}>
      <div className={styles.type_products}>
        <Link to={"/ropa-hombre"}>Ropa Hombre</Link>
        <Link to={"/ropa-mujer"}>Ropa Mujer</Link>
        <Link to={"/Articulos-electronicos"}>Articulos tecnologicos</Link>
        <Link to={"/joyas"}>Joyas</Link>
      </div>
      <FormLogin />
      
      <button
        onClick={() => (productosCarrito?.length > 0 ? carritoModal() : "")}
        className={styles.carrito}
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
        <p className={styles.numero}>{productosCarrito.length}</p>
      </button>
    
      <button onClick={() => navigate("/")} className={styles.house}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
          <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
        </svg>
      </button>
      
    </nav>
  );
};

export default MenuWeb;
