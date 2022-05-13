import React from "react";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import { Card } from "../component/card";
import { Jumbotron } from "../component/jumbotron";
import { UserProfile } from "./UserProfile";

function Hola() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <Card />
        <Card />
        <Card />

        <Footer />
      </div>
    </>
  );
}

export default Hola;
