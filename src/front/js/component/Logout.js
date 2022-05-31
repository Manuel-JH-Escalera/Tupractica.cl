import React from "react";
import { Link } from "react-router-dom";

const stylesb = {
  textDecoration: "none",
  color: "white",
};

export const Logout = () => {

    const LogOut = () => {
        sessionStorage.removeItem("jwt-token");
        console.log("login out");
        window.location = "/"
      };
    
  return (
    <>
      <button type="button" className="btn btn-danger" onClick={() =>LogOut()}>
    
          Cerrar Sesión
 
      </button>
    </>
  );
};
