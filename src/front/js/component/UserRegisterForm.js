import React from "react";
import Input from "./Forms/Input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const UserRegisterForm = () => {
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
    <div className="container w-50 ">
      <div className="row">
        <form
          className="card col-sm-12 col-md-12 col-lg-12 mt-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="card-header fs-1 bg-white text-center">
            <h1 className="card-title">Registro Para Alumnos</h1>
          </div>
          <div className="card-body">
            <div className="row pb-1">
              <div className="col">
                <label for="firstname" className="form-label">
                  <b>Nombres</b>
                </label>
                <span class="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre de alumno"
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
                <label for="lastname" className="form-label">
                  <b>Apellidos</b>
                </label>
                <span class="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellido"
                    aria-label="apellido"
                    id="apellido"
                    {...register("apellido", {
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
                <label for="date" className="form-label">
                  <b>Fecha de Nacimiento</b>
                </label>
                <span class="input-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="date"
                    aria-label="Last name"
                    id="date"
                    {...register("date", {
                      required: true,
                    })}
                  />
                  {errors.date?.type === "required" && (
                    <span
                      className="input-group-text bg-white border-start-0"
                      id="basic-addon1"
                    >
                      <AiFillCloseCircle className="fs-4 text-danger" />
                    </span>
                  )}
                </span>
                {errors.date?.type === "required" && (
                  <p className="text-danger"> El nombre es requerido </p>
                )}
              </div>
            </div>
          </div>
          <div className="card-footer ">
            <div className="row d-md-flex gap-2">
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

export default UserRegisterForm;
