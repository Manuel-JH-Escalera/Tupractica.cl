import React, { useState, useEffect, useContext } from "react";
import { Footer } from "../component/footer";
import { Navbar } from "../component/Navbar";
import { Card } from "../component/Card";
import { Jumbotron } from "../component/jumbotron";
import { UserProfile } from "./UserProfile";
import { Carusel } from "../component/Carusel";
import ModalOferta from "../component/ModalOferta";

function FrontPage() {
  const [characters, setCharacters] = useState([]);

  const initialUrl =
<<<<<<< HEAD
    "https://5000-anyelinapar-proyectofin-t87xjlc6kxy.ws-us46.gitpod.io/oferta";
=======
    "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/oferta";
>>>>>>> bdb0b297ef1130b698c7df095ca14e75c60e3070

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <Jumbotron />
      <div className="container">
        <div className="row pt-5">
          <div className="">
            <Card characters={characters} />
          </div>
        </div>

        <h1>Empresa Asociada</h1>
        <div className="container w-50">
          <Carusel />
        </div>
      </div>
      <ModalOferta characters={characters} />

      {/* <Footer /> */}
    </>
  );
}

export { FrontPage };
