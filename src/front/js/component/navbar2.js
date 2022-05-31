import React from "react";
import { Link } from "react-router-dom";

const styles = {
  textDecoration: "none",
  color: "black",
};

const stylesb = {
  textDecoration: "none",
  color: "white",
};

export const Navbar2 = () => {
  const LogOut = () => {
    sessionStorage.removeItem("jwt-token");
    console.log("login out");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light rounded"
      aria-label="Tenth navbar example"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample08"
          aria-controls="navbarsExample08"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-brand">
          <Link to="/" style={styles}>
            {" "}
            <img
              src="https://i.ibb.co/2gRKjF5/logo-renovado2.png"
              alt="logo"
              width={130}
              height={40}
              className="d-inline-block align-text-top"
            />
          </Link>
        </span>
        <div
          className="collapse navbar-collapse justify-content-md-start"
          id="navbarsExample08"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link" aria-current="page" href="#">
                <Link to="/Buscador" style={styles}>
                  Busca tu Practica
                </Link>
              </span>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="dropdown08"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Registrate
              </span>
              <ul className="dropdown-menu" aria-labelledby="dropdown08">
                <li>
                  <span className="dropdown-item" href="#">
                    <Link to="/RegistroAlumno" style={styles}>
                      Registro para Alumnos
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="dropdown-item" href="#">
                    <Link to="/RegistroEmpresa" style={styles}>
                      Registro para Empresas
                    </Link>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className=" text-end mt-3">
          <button type="button" className="btn btn-primary me-2">
            <Link to="/AccesoAlumno" style={stylesb}>
              Acceso Alumno
            </Link>
          </button>
          <button type="button" className="btn btn-primary">
            <Link to="/AccesoEmpresa" style={stylesb}>
              Acceso Empresa
            </Link>
          </button>

          <button type="button" className="btn btn-primary" onClick={LogOut}>
            <Link to="/" style={stylesb}>
              Cerrar Sesión
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};
