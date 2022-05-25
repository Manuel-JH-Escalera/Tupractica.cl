//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import JobsApplication from "./component/JobsApplyUser";
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
<<<<<<< HEAD
import StudentApplications from "./pages/StudentApplications";
=======


>>>>>>> 8f68d4792408468c4c53637bfae453b49e2c0b28
//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
