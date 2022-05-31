import React from "react";
import { Link } from "react-router-dom";

const stylesb = {
    textDecoration: "none",
    color: "white",
  };

export const Logins = () => {
  return (
    <>
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
    </>
  );
};
