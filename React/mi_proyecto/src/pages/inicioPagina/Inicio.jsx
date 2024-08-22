
import React from 'react'


export const Inicio = ()=> {
  return (
    <>
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="..." className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  </>
  );
};
