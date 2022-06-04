import React, { useState, useEffect, useContext } from "react";
import { Navbar } from "../component/Navbar";
import Searcher from "../component/Searcher";
import JobList from "../component/JobsList";
import { Footer } from "../component/footer";
import { ResultadosBusqueda } from "../component/JobsApi";
import ModalOferta from "../component/ModalOferta";
import { BotonPostular } from "../component/BotonPostular";

function Jobs() {
  const token = sessionStorage.getItem("jwt-token");
  const [info, setInfo] = useState([]);

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

  const [comunas, setComunas] = useState([]);

  const initialUrl =
    "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/comuna";

  const fetchComunas = (initialUrl) => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => setComunas(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    prueba();
    fetchComunas(initialUrl)
  }, []);
  return (
    <>
      <Searcher comunas={comunas} info={info}/>
    </>
  );
}

export {Jobs};
