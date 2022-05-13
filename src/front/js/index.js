//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import UserForm from "./pages/UserForm";
import CompanyForm from "./pages/CompanyForm";
import FrontPage from "./pages/FrontPage"
//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<FrontPage />, document.querySelector("#app"));
