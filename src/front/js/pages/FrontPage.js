import React from "react";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import { Card } from "../component/Card";
import { Jumbotron } from "../component/jumbotron";
import { UserProfile } from "./UserProfile";


function Hola() {
  return (
    <>
      <Navbar />
        <Jumbotron />
        <Card />
        <Card />
        <Card />
      <Footer />
    </>
  );
}

export default Hola;
