import React from "react";
import { Link } from "react-router-dom";
import { Logins } from "./Logins";
import { Logout } from "./Logout";
import { useForm } from "react-hook-form";

const stylesb = {
    textDecoration: "none",
    color: "white",
  };

export const BotonPostular = () => {

    return <button type="button" className="btn btn-secondary w-25" data-bs-toggle="modal" data-bs-target="#exampleMod">
    Postular
  </button>
}

