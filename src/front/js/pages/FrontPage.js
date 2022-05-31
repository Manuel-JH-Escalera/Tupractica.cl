import React, { useState, useEffect, useContext } from "react";
import { Footer } from "../component/footer";
import { Navbar } from "../component/Navbar";
import { Card } from "../component/Card";
import { Jumbotron } from "../component/jumbotron";
import { UserProfile } from "./UserProfile";

function FrontPage() {
  const [characters, setCharacters] = useState([]);

  const initialUrl =
    "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/oferta";

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
          <h1>Ingenieria</h1>
          <div className="">
            <Card
              characters={characters}
              img={"https://picsum.photos/seed/100/500/325/"}
            />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export { FrontPage };
