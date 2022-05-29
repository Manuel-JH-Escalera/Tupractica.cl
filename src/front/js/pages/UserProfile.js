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
  const [info, setInfo] = useState([]);
  const token = localStorage.getItem("jwt-token");

  const initialUrl = "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/Profile";

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
    fetch("https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/Profile",
    {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }})
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .catch((error) => console.log(error));
  }
  
  useEffect(() => {
	  prueba();
	}, [])


  return (
    <div className="container ">
      <ProfilePhoto />
      <Bio info={info}/>
      <ProfileDataPerson info={info}/>
      <AddressData />
      <ContacInformation />
      <Anexos />
      <h1></h1>
      <button >prueba</button>
    </div>
  );
};
