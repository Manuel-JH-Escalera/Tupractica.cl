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
    function prueba() {
        fetch(
          "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/ProfilePractiante",
          {
            method: "GET", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        )
          .then((response) => response.json())
          .then((data) => setInfo(data))
          .catch((error) => console.log(error));
      }
    
      /* useEffect(() => {
        prueba();
      }, []); */

    return <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Postular
  </button>
}

