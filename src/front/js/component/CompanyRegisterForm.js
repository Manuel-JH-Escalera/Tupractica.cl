import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Errors } from "react-hook-form";
import { useForm } from "react-hook-form";

import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const CompanyRegisterForm = () => {
  /* preventDefault = () => {
        preventDefault()
    } */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container w-50 mt-3">
      <div className="row">
        <form
          className="card col-sm-12 col-md-12 col-lg-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="card-header fs-1 bg-white text-center">
            <h1 className="card-title">Registro Para Empresas</h1>
          </div>
          <div className="card-body">
            <div className="row pb-1">
              <div className="col">
                <label for="companyname" className="form-label">
                  <b>Nombre de la Empresa</b>
                </label>
                <span class="input-group">
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
                <label for="mail" className="form-label">
                  <b>Correo Electronico</b>
                </label>
                <span class="input-group">
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
                <span class="input-group">
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
            <div className="row pb-1">
              <div className="col">
                <label for="lastnameincharge" className="form-label">
                  <b>Rut de la Empresa</b>
                </label>
                <span class="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="rut"
                    {...register("rut", {
                      pattern: /^[0-9]+/,
                      required: true,
                    })}
                  />
                  {errors.rut?.type === "required" && (
                    <span
                      className="input-group-text bg-white border-start-0"
                      id="basic-addon1"
                    >
                      <AiFillCloseCircle className="fs-4 text-danger" />
                    </span>
                  )}
                </span>
                {errors.rut?.type === "required" && (
                  <p className="text-danger"> Su rut es requerido</p>
                )}
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="row d-md-flex gap-2 justify-content-center">
              <button
                type="submit"
                className="btn btn-primary btn-lg" /* onSubmit={(preventDefault)} */
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

export default CompanyRegisterForm;
