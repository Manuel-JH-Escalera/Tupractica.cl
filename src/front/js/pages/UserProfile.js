import React, { useState, useEffect, useContext } from "react";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/footer";
import ProfilePhoto from "../component/ProfilePhoto";
import ProfileDataPerson from "../component/ProfileDataPerson";
import AddressData from "../component/AddressData";
import ContacInformation from "../component/ContactInformation";
import Anexos from "../component/anexos";
import Bio from "../component/Bio";

export const UserProfile = () => {
  const [characters, setCharacters] = useState([]);
  const token = localStorage.getItem("jwt-token");

  const initialUrl =
    "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/Profile";

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl, {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token,
    })
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);
  
  return (
    <div className="container ">
      <ProfilePhoto />
      <Bio />
      <ProfileDataPerson />
      <AddressData />
      <ContacInformation />
      <Anexos />
    </div>
  );
};
