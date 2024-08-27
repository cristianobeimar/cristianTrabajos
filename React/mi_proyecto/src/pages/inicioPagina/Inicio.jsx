import React, { useEffect, useState } from "react";
import "./Inicio.css";
import Footer from "../../components/Footer/Footer";
import Navegacion from "../../components/Navegacion/navegacion";


const Inicio = () => {
  const [indiseActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const totalDiapositivas = document.querySelectorAll(".carousel-item").length;

    function MostrarSigiente() {
      setIndiceActual((indiceAnterior) => (indiceAnterior + 1) % totalDiapositivas);
    }

    function MostrarAnterior() {
      setIndiceActual((indiceAnterior) => (indiceAnterior - 1 + totalDiapositivas) % totalDiapositivas);
    }

    const ButtonSigiente = document.querySelector(".carousel-control-next");
    const ButtonAnterior = document.querySelector(".carousel-control-prev");

    ButtonSigiente.addEventListener("click", MostrarSigiente);
    ButtonAnterior.addEventListener("click", MostrarAnterior);

    const interval = setInterval(MostrarSigiente, 6000); // Cambia cada 6 segundos

    return () => {
      clearInterval(interval);
      ButtonSigiente.removeEventListener("click", MostrarSigiente);
      ButtonAnterior.removeEventListener("click", MostrarAnterior);
    };
  }, []);

  useEffect(() => {
    const indicators = document.querySelectorAll(".indicator-button");
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === indiseActual);
    });
  }, [indiseActual]);

  return (
    <>
    <Navegacion/>
      <div className="carousel">
        <div className="carousel-wrapper" style={{ transform: `translateX(-${indiseActual * 100}%)` }}>
          <div className="carousel-item">
            <img
              src="https://www.coomultrasan.com.co/file/general/Envio_gratis_LG_2024_Desktop.jpg"
              className="carousel-image"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.sears.com.mx/c/electronica-y-tecnologia-hotsale-2022/img/Carrusel/ASUS-MOB-2402x1402.jpg"
              className="carousel-image"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ytimg.com/vi/ZXb6DRrTF8Q/maxresdefault.jpg"
              className="carousel-image"
              alt="Slide 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/10/maniquies-vestidos-tienda-ropa-ofertas-2857351.jpg?tf=3840x"
              className="carousel-image"
              alt="Slide 4"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://tecnosoluciones.com/wp-content/uploads/2022/11/IMG-Articulo_BF-CM_TS-2022.jpg"
              className="carousel-image"
              alt="Slide 5"
            />
          </div>
        </div>

        <div className="carousel-indicators">
          <button
            type="button"
            className="indicator-button active"
            aria-current="true"
            aria-label="Slide 1"
            onClick={() => setIndiceActual(0)}
          ></button>
          <button
            type="button"
            className="indicator-button"
            aria-current="false"
            aria-label="Slide 2"
            onClick={() => setIndiceActual(1)}
          ></button>
          <button
            type="button"
            className="indicator-button"
            aria-current="false"
            aria-label="Slide 3"
            onClick={() => setIndiceActual(2)}
          ></button>
          <button
            type="button"
            className="indicator-button"
            aria-current="false"
            aria-label="Slide 4"
            onClick={() => setIndiceActual(3)}
          ></button>
          <button
            type="button"
            className="indicator-button"
            aria-current="false"
            aria-label="Slide 5"
            onClick={() => setIndiceActual(4)}
          ></button>
        </div>

        <button type="button" className="carousel-control-prev">
          <span className="carousel-control-icon">
            <svg
              className="carousel-control-svg"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only"></span>
          </span>
        </button>
        <button type="button" className="carousel-control-next">
          <span className="carousel-control-icon">
            <svg
              className="carousel-control-svg"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only"></span>
          </span>
        </button>
      </div>
    <h1 id ="title" >Ofertas del dia</h1>
    <div className="descrip"> 
    <p>tecnologia</p>
    <p>Ropa para dama</p>
    <p>Joyeria</p>
    <p>Ropa para caballero</p>
    </div>
   <div className="ofertas">
    <img className= "ima" src="https://down-co.img.susercontent.com/file/sg-11134201-23010-wz4g2uguh8lvad_tn.webp" alt="" />
    <img className= "ima" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDvbdZ3X8LrivmtbZU3h70IzVYP3idZ47mjg&s" alt="" />
    <img className= "ima" src="https://ae01.alicdn.com/kf/S329bda889049464499d53798f489c06bG.jpg_640x640Q90.jpg_.webp" alt="" />
    <img className= "ima" src="https://res.cloudinary.com/pozters/image/upload/w_700/v1531320146/prod_uploads/e0VJZPadwynD2b7" alt="" />
   </div>
  <Footer/>
    </>
    
  );
};

export default Inicio;
