import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Errors } from "react-hook-form";
import { useForm } from "react-hook-form";

import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const AdminRegisterForm = () => {
    
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    const onSubmit = (data) => {
        fetch("https://5000-attackamabw-proyectofin-8mwxjo5p5q8.ws-us45.gitpod.io/api/admin-register", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
        console.log(data)
    }


    return (
      <div className="container w-50 mt-3">
        <div className="row">
          <form
            className="col-sm-12 col-md-12 col-lg-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="fs-1 bg-white text-center">
              <h1 className="card-title">Registro Admin</h1>
            </div>
            <div className="">
              <div className="row pb-1">
                <div className="col">
                  <label for="companyname" className="form-label">
                    <b>Nombre</b>
                  </label>
                  <span className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre de la Empresa"
                      aria-label="Nombre"
                      id="Nombre"
                      {...register("nombre", {
                        required: true,
                      })}
                    />
                    {errors.nombre?.type === "required" && (
                      <span
                        className="input-group-text bg-white border-start-0"
                        id="basic-addon1"
                      >
                        <AiFillCloseCircle className="fs-4 text-danger" />
                      </span>
                    )}
                  </span>
                  {errors.nombre?.type === "required" && (
                    <p className="text-danger"> El nombre es requerido </p>
                  )}
                </div>
              </div>
              <div className="row pb-1">
                <div className="col">
                  <label for="companyname" className="form-label">
                    <b>Apellido</b>
                  </label>
                  <span className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre de la Empresa"
                      aria-label="Nombre"
                      id="apellido"
                      {...register("apellido", {
                        required: true,
                      })}
                    />
                    {errors.apellido?.type === "required" && (
                      <span
                        className="input-group-text bg-white border-start-0"
                        id="basic-addon1"
                      >
                        <AiFillCloseCircle className="fs-4 text-danger" />
                      </span>
                    )}
                  </span>
                  {errors.apellido?.type === "required" && (
                    <p className="text-danger"> El apellido es requerido </p>
                  )}
                </div>
              </div>
              <div className="row pb-1">
                <div className="col">
                  <label for="mail" className="form-label">
                    <b>Correo Electronico</b>
                  </label>
                  <span className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                      })}
                    />
                    {errors.email?.type === "required" && (
                      <span
                        className="input-group-text bg-white border-start-0"
                        id="basic-addon1"
                      >
                        <AiFillCloseCircle className="fs-4 text-danger" />
                      </span>
                    )}
                  </span>
                </div>
                {errors.email?.type === "pattern" && (
                  <p>El formato de email no es valido</p>
                )}
                {errors.email?.type === "required" && (
                  <p className="text-danger">
                    {" "}
                    El correo electronico es requerido{" "}
                  </p>
                )}
              </div>
  
              <div className="row pb-1">
                <div className="col">
                  <label for="password" className="form-label">
                    <b>Contraseña</b>
                  </label>
                  <span className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      {...register("password", { required: true })}
                    />
                    {errors.password?.type === "required" && (
                      <span
                        className="input-group-text bg-white border-start-0"
                        id="basic-addon1"
                      >
                        <AiFillCloseCircle className="fs-4 text-danger" />
                      </span>
                    )}
                  </span>
                  {errors.password?.type === "required" && (
                    <p className="text-danger"> La contraseña es requerida </p>
                  )}
                </div>
              </div>
            </div>
            <div className="">
              <div className="row d-md-flex gap-2 justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg mt-2" 
                >
                  Registrame
                </button>
                <button type="reset" className="btn btn-secondary btn-lg">
                  Limpiar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AdminRegisterForm;
  