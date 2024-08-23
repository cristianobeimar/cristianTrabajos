import React, { useEffect, useState } from "react";
import "./Inicio.css";

const Inicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const totalSlides = document.querySelectorAll(".carousel-item").length;

    function showNextSlide() {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }

    function showPrevSlide() {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    }

    const nextButton = document.querySelector(".carousel-control-next");
    const prevButton = document.querySelector(".carousel-control-prev");

    nextButton.addEventListener("click", showNextSlide);
    prevButton.addEventListener("click", showPrevSlide);

    const interval = setInterval(showNextSlide, 6000); // Cambia cada 6 segundos

    return () => {
      clearInterval(interval);
      nextButton.removeEventListener("click", showNextSlide);
      prevButton.removeEventListener("click", showPrevSlide);
    };
  }, []);

  useEffect(() => {
    const indicators = document.querySelectorAll(".indicator-button");
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === currentIndex);
    });
  }, [currentIndex]);

  return (
    <>
      <div className="carousel">
        <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/foto-gratis/rebajas-descuento-especial-auriculares_23-2150040376.jpg"
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
              src="https://www.juancmejia.com/wp-content/uploads/2018/05/Promociones-y-descuentos-en-el-comercio-electro%CC%81nico.jpg"
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
            onClick={() => setCurrentIndex(0)}
          ></button>
          <button
            type="button"
            className="indicator-button"
            aria-current="false"
            aria-label="Slide 2"
            onClick={() => setCurrentIndex(1)}
          ></button>
          <button
            type="button"
            className="indicator-button"
            aria-current="false"
            aria-label="Slide 3"
            onClick={() => setCurrentIndex(2)}
          ></button>
          <button
            type="button"
            className="indicator-button"
            aria-current="false"
            aria-label="Slide 4"
            onClick={() => setCurrentIndex(3)}
          ></button>
          <button
            type="button"
            className="indicator-button"
            aria-current="false"
            aria-label="Slide 5"
            onClick={() => setCurrentIndex(4)}
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
    </>
  );
};

export default Inicio;
