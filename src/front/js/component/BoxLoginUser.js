import React from "react"
import { Link } from "react-router-dom";

const stylesb = {
    textDecoration: 'none',
    color: "white"
  };

const Login = () => {

    return <div className="container w-50 mt-3 ">
        <h1 className="text-center">Bienvenido</h1>
        <h3 className="text-center">Inicia Sesion</h3>
        <form className="pt-5">
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 pt-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Recuerdame</label>
            </div>
            <button type="button" className="btn btn-primary">
                <Link to="/PerfilAlumno" style={stylesb}>Iniciar Sesion</Link>
          </button>
        </form>
    </div>
}

export default Login