//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import UserForm from "./component/UserRegisterForm";
import CompanyForm from "./component/CompanyRegisterForm";
import FrontPage from "./pages/FrontPage";
import CompanyRegister from "./pages/CompanyRegister";
import UserRegister from "./pages/UserRegister";
import Jobs from "./pages/Jobs";
import { CompanyLogin } from "./pages/CompanyLogin";
import { CompanyPost } from "./pages/CompanyPost";
//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";
import { UserProfile } from "./pages/UserProfile";
import { CompanyProfile } from "./pages/CompanyProfile ";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
