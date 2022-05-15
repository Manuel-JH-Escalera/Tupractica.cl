import React from "react";
import { Footer } from "../component/footer";
import { Navbar } from "../component/Navbar";
import { Card } from "../component/Card";
import { Jumbotron } from "../component/jumbotron";


function FrontPage() {
  return (
    <>
      {/* <Navbar /> */}
        <Jumbotron />
        <Card />
        <Card />
        <Card />
      {/* <Footer /> */}
    </>
  );
}

export {FrontPage};
