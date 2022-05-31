import React from "react";
import { Link } from "react-router-dom";

export const Carusel = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="titulo justify-content-center"></div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://imax.cl/wp-content/uploads/2018/04/montaje_BE_AI_1.jpg"
            className="d-block  w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://sagofisur.cl/wp-content/uploads/2018/10/LIPIGAS.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://static-geektopia.com/storage/t/p/426/4260/816x381/amazon-logo_1366903079.webp"
            className="d-block w-100 "
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://educacion.gob.ec/wp-content/uploads/2017/11/nuevo-logo-Mineduc.jpg"
            className="d-block w-100 "
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Falabella.svg/1200px-Falabella.svg.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
