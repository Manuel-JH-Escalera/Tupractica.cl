//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import FrontPage from "./pages/FrontPage";
//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";
import { UserProfile } from "./pages/UserProfile";

//render your react application
ReactDOM.render(<UserProfile />, document.querySelector("#app"));
