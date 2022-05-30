import React, { useState, useEffect, useContext } from "react";
import { Footer } from "../component/footer";
import { Navbar } from "../component/Navbar";
import { Card } from "../component/Card";
import { Jumbotron } from "../component/jumbotron";
import { UserProfile } from "./UserProfile";

function FrontPage() {
  const [characters, setCharacters] = useState([]);

  const initialUrl =
    "https://5000-anyelinapar-proyectofin-t87xjlc6kxy.ws-us46.gitpod.io/oferta";

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
          <div className="col-ms-12 col-md-6 col-lg-3 g-4">
            <Card
              characters={characters}
              image={"https://picsum.photos/seed/100/500/325/"}
            />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export { FrontPage };
