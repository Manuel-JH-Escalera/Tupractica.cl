import React, { useState, useEffect } from "react";
import CompanyData from "../component/CompanyData";
import ProfilePhoto from "../component/ProfilePhoto";
import AddressData from "../component/AddressData";
import ContacInformation from "../component/ContactInformation";
import Bio from "../component/Bio";
import { Link } from "react-router-dom";

const styles = {
  textDecoration: "none",
  color: "black",
};

export const CompanyProfile = () => {
  const [infoProfile, setInfoProfile] = useState([]);
  const token = sessionStorage.getItem("jwt-token");

  /*   const fetchCharacters = () => {
    fetch("https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/Profile", ,
    headers: 
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token,
    )
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.log(error));
      
  }; */

  function prueba() {
    fetch(
      "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/ProfileEmpresa",
      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setInfoProfile(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    prueba();
  }, []);

  return (
    <div className="container">
      <ProfilePhoto />
      <Bio info={infoProfile} />
      <CompanyData info={infoProfile} />
      <AddressData />
      <ContacInformation />
      <button>
        <Link to="/PublicacionEmpresa" style={styles}>
          Crea tu Publicacion
        </Link>
      </button>
    </div>
  );
};
