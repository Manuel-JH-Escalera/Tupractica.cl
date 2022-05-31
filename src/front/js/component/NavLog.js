import React from "react";
import { Link } from "react-router-dom";
import { Logins } from "./Logins";
import { Logout } from "./Logout";

const stylesb = {
    textDecoration: "none",
    color: "white",
  };

export const NavLog = ({status}) => {
    sessionStorage.getItem(status)
    switch (status) {
      case "jwt-token":
        return <Info message={text} />;
      case null:
        return <Error message={text} />;
    }
  };
