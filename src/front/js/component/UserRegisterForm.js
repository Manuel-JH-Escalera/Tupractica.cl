import React from "react";
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
          className=" mt-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="fs-1 bg-white text-center">
            <h1> Registro Para Alumnos</h1>
          </div>
          <div className="">
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
            <div className="row pb-1">
              <div className="col">
                <label for="region" className="form-label">
                  <b>Region</b>
                </label>
                <select class="form-select" aria-label="Default select example" {...register("region", {
                      required: true,
                    })}>
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="row pb-1">
              <div className="col">
                <label for="mail" className="form-label">
                  <b>Provincia</b>
                </label>
                <select class="form-select" aria-label="Default select example" {...register("provincia", {
                      required: true,
                    })}>
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="row pb-1">
              <div className="col">
                <label for="comuna" className="form-label">
                  <b>Comuna</b>
                </label>
                <span className="input-group">
                  <select class="form-select" aria-label="Default select example" {...register("comuna", {
                        required: true,
                      })}>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  {errors.comuna?.type === "required" && (
                    <span
                      className="input-group-text bg-white border-start-0"
                      id="basic-addon1"
                    >
                      <AiFillCloseCircle className="fs-4 text-danger" />
                    </span>
                  )}
                </span>
                {errors.comuna?.type === "required" && (
                <p className="text-danger">
                  {" "}
                  La comuna es requerida{" "}
                </p>
              )}
              </div>
            </div>
          </div>
          <div className="">
            <div className="row d-md-flex gap-2">
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

export default UserRegisterForm;
