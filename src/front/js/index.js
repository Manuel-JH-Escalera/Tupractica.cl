//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import UserForm from "./component/UserRegisterForm";
import CompanyForm from "./component/CompanyRegisterForm";
import FrontPage from "./pages/FrontPage"
import CompanyRegister from "./pages/CompanyRegister";
import UserRegister from "./pages/UserRegister";
import Jobs from "./pages/Jobs";
//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
