import React from "react"
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
                <label for="exampleInputEmail1" className="form-label">Correo Electronico:</label>
                <span class="input-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email", {
                        required: true,
                        pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ })}/>
                    { errors.email?.type === "pattern" && <span className="input-group-text bg-white border-start-0" id="basic-addon1" ><AiFillCloseCircle className="fs-4 text-danger"/></span>}
                </span>
                    { errors.email?.type === "pattern" && <label className="text-danger">El formato del email no es valido</label>}
            </div>
            <div className="mb-3 pt-3">
                <label for="exampleInputPassword1" className="form-label">Password:</label>
                <span class="input-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" {...register("password", {
                        required: true,
                        minLength: 5
                        })}/>
                    { errors.password?.type === "minLength" && <span className="input-group-text bg-white border-start-0" id="basic-addon1" ><AiFillCloseCircle className="fs-4 text-danger"/></span>}
                </span>
                    { errors.password?.type === "minLength" && <label className="text-danger">Ingresa tu password</label>}
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register("remember",)}/>
                <label className="form-check-label" for="exampleCheck1">Recuerdame</label>
            </div>
            <input type="submit" value="Iniciar sesión" className="bg-primary text-white border-0"></input>
        </form>
    </div>
}

export default Login