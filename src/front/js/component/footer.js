import React, { Component } from "react";

export const Footer = () => (
  <div className="container-fluid">
    <footer className="row row-cols-5 py-5 my-5 border-top">
      <div className="col">
        <a
          href="/"
          className="d-flex align-items-center mb-3 link-dark text-decoration-none"
        ></a>
        <p className="text-muted text-center">
          <img
            src="https://i.ibb.co/vX2hFkf/renovando.png"
            alt="logo"
            width={170}
            height={104}
          ></img>
        </p>
      </div>

      <div className="col"></div>

      <div className="col">
        <h5>Informacion Adicional</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              contacto
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              QuienesSomos
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Termino y condiciones
            </a>
          </li>
        </ul>
      </div>

      <div className="col">
        <h5>Categoria</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Ingenieria
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Medicina
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Educacion
            </a>
          </li>
        </ul>
      </div>

      <div className="col">
        <h5>Contacto</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              <a href="https://maps.google.com/?q=Pedro Aguirre Cerda 73, Buin">
                <i className="fas fa-map-marker-alt"></i> Pedro Aguirre Cerda
                73, Buin
              </a>
            </a>
          </li>
          <li className="nav-item mb-4">
            <a>
              <i className="fas fa-envelope"></i> tupractica@hotmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);
