import React from "react"
import Input from "./Forms/Input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const stylesb = {
    textDecoration: 'none',
    color: "white"
  };

const Login = () => {

    const { register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return <div className="container w-50 mt-3 ">
        <h1 className="text-center">Bienvenido</h1>
        <h3 className="text-center">Inicia Sesion</h3>
        <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Correo Electronico</label>
                <span class="input-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email", {pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ })}/>
                    { errors.email?.type === "pattern" && <span className="input-group-text bg-white border-start-0" id="basic-addon1" ><AiFillCloseCircle className="fs-4 text-danger"/></span>}
                </span>
                    { errors.email?.type === "pattern" && <p>El formato de email no es valido</p>}
            </div>
            <div className="mb-3 pt-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <span class="input-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" {...register("password", {required: true})}/>
                    { errors.email?.type === "required" && <span className="input-group-text bg-white border-start-0" id="basic-addon1" ><AiFillCloseCircle className="fs-4 text-danger"/></span>}
                </span>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register("remember",)}/>
                <label className="form-check-label" for="exampleCheck1">Recuerdame</label>
            </div>
            <input type="submit" value="Iniciar sesión" className="bg-primary text-white border-0"></input>
            {/* <button type="button" className="btn btn-primary">
                <Link to="/PerfilEmpresa" style={stylesb}>Iniciar Sesion</Link>
          </button> */}
        </form>
    </div>
}

export default Login