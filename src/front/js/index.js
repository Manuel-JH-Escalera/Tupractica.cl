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
import { UserProfile } from "./pages/UserProfile";

//render your react application
<<<<<<< HEAD
ReactDOM.render(<UserProfile />, document.querySelector("#app"));
=======
ReactDOM.render(<Jobs />, document.querySelector("#app"));
>>>>>>> 5e3b2e8db1cb09e533cbb33bedc46b452bc1c14d
