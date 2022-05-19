import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const Publicar = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <h1 className="text-center">Publica una Oferta</h1>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 mt-3">
                <div className="form-group">
                  <label for="title" className="control-label">
                    Puesto / Título del aviso:
                  </label>
                  <span className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Puesto / Título del aviso"
                      aria-label="puesto"
                      id="puesto"
                      {...register("puesto", {
                        required: true,
                      })}
                    />
                    {errors.puesto?.type === "required" && (
                      <span
                        className="input-group-text bg-white border-start-0"
                        id="basic-addon1"
                      >
                        <AiFillCloseCircle className="fs-4 text-danger" />
                      </span>
                    )}
                  </span>
                  {errors.puesto?.type === "required" && (
                    <p className="text-danger"> Ingresa Puesto de Trabajo </p>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 mt-2">
                <div className="form-group m-0">
                  <label for="descripcion" className="control-label">
                    Descripción del puesto:
                  </label>
                  <span className="input-group">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Descripción del puesto"
                      aria-label="Descripción del puesto"
                      id="descripción"
                      {...register("descripción", {
                        required: true,
                      })}
                    />
                    {errors.descripción?.type === "required" && (
                      <span
                        className="input-group-text bg-white border-start-0"
                        id="basic-addon1"
                      >
                        <AiFillCloseCircle className="fs-4 text-danger" />
                      </span>
                    )}
                  </span>
                  {errors.descripción?.type === "required" && (
                    <p className="text-danger">
                      {" "}
                      Ingresa descripcion del trabajo{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6 mt-2">
                <div className="form-group">
                  <label for="area" className="control-label">
                    Carrera:
                  </label>

                  <span className="input-group">
                    <input
                      type="text"
                      rows="6"
                      className="form-control"
                      placeholder=" Carrera"
                      aria-label=" Carrera"
                      id=" Carrera"
                      {...register("Carrera", {
                        required: true,
                      })}
                    />
                    {errors.Carrera?.type === "required" && (
                      <span
                        className="input-group-text bg-white border-start-0"
                        id="basic-addon1"
                      >
                        <AiFillCloseCircle className="fs-4 text-danger" />
                      </span>
                    )}
                  </span>
                  {errors.Carrera?.type === "required" && (
                    <p className="text-danger"> Ingresa Carrera </p>
                  )}
                </div>
              </div>

              <div className="col-6 mt-2">
                <div className="form-group">
                  <label for="subarea" className="control-label">
                    Comuna:
                  </label>

                  <span className="input-group">
                    <input
                      type="text"
                      rows="6"
                      className="form-control"
                      placeholder="Comuna"
                      aria-label="Comuna"
                      id="Comuna"
                      {...register("Comuna", {
                        required: true,
                      })}
                    />
                    {errors.Comuna?.type === "required" && (
                      <span
                        className="input-group-text bg-white border-start-0"
                        id="basic-addon1"
                      >
                        <AiFillCloseCircle className="fs-4 text-danger" />
                      </span>
                    )}
                  </span>
                  {errors.Comuna?.type === "required" && (
                    <p className="text-danger"> Ingresa tu Comuna </p>
                  )}
                </div>
              </div>
            </div>
            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="salario"
                {...register("salario", {})}
              />
              <label className="form-check-label" for="flexCheckDefault">
                Percibe Salario
              </label>
            </div>

            <div className="row pt-5">
              <div className="col-sm-12">
                <div className="form-footer-buttons d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary mx-1 ">
                    Postular
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mx-1"
                    onClick="cancelarAvisoGratis()"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publicar;
