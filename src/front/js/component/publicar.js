import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";

const Publicar = () => {
  const [infoProfile, setInfoProfile] = useState([]);
  const token = sessionStorage.getItem("jwt-token");
  function prueba() {
    fetch(
      "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/ProfileEmpresa",
      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setInfoProfile(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    prueba();
  }, []);

  const [characters, setCharacters] = useState([]);

  const initialUrl =
    "https://5000-anyelinapar-proyectofin-t87xjlc6kxy.ws-us46.gitpod.io/comuna";

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    fetch(
      "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/create-oferta",
      {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        console.log("Success:", response);
        Swal.fire("Registro Exitoso");
      })
      .catch((error) => console.error("Error:", error));

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
                    Título :
                  </label>
                  <span className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Título del aviso"
                      aria-label="titulo"
                      id="titulo"
                      {...register("titulo", {
                        required: true,
                      })}
                    />
                    {errors.titulo?.type === "required" && (
                      <span
                        className="input-group-text bg-white border-start-0"
                        id="basic-addon1"
                      >
                        <AiFillCloseCircle className="fs-4 text-danger" />
                      </span>
                    )}
                  </span>
                  {errors.titulo?.type === "required" && (
                    <p className="text-danger"> Ingresa Título del aviso </p>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group m-0">
                  <label for="descripcion" className="control-label">
                    Descripción del puesto
                  </label>
                  <span className="input-group">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder=" Descripción del puesto"
                      aria-label="titulo"
                      id="titulo"
                      {...register("descripcion", {
                        required: true,
                      })}
                    />
                    {errors.descripcion?.type === "required" && (
                      <span
                        className="input-group-text bg-white border-start-0"
                        id="basic-addon1"
                      >
                        <AiFillCloseCircle className="fs-4 text-danger" />
                      </span>
                    )}
                  </span>
                  {errors.descripcion?.type === "required" && (
                    <p className="text-danger">
                      {" "}
                      Ingresa la Descripción del aviso{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
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
                      {...register("carrera_requerida", {
                        required: true,
                      })}
                    />
                    {errors.carrera_requerida?.type === "required" && (
                      <span
                        className="input-group-text bg-white border-start-0"
                        id="basic-addon1"
                      >
                        <AiFillCloseCircle className="fs-4 text-danger" />
                      </span>
                    )}
                  </span>
                  {errors.carrera_requerida?.type === "required" && (
                    <p className="text-danger"> Ingresa Carrera </p>
                  )}
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <div className="form-group">
                    <label for="area" className="control-label">
                      Area:
                    </label>

                    <span className="input-group">
                      <input
                        type="text"
                        rows="6"
                        className="form-control"
                        placeholder=" area"
                        aria-label=" area"
                        id=" area"
                        {...register("area", {
                          required: true,
                        })}
                      />
                      {errors.area?.type === "required" && (
                        <span
                          className="input-group-text bg-white border-start-0"
                          id="basic-addon1"
                        >
                          <AiFillCloseCircle className="fs-4 text-danger" />
                        </span>
                      )}
                    </span>
                    {errors.area?.type === "required" && (
                      <p className="text-danger"> Ingresa Carrera </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label for="date" className="form-label">
                  <b>Fecha de Inicio</b>
                </label>
                <span className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="date"
                    aria-label="Fecha de inicio"
                    id="date"
                    {...register("fecha_inicio", {
                      required: true,
                    })}
                  />
                  {errors.fecha_inicio?.type === "required" && (
                    <span
                      className="input-group-text bg-white border-start-0"
                      id="basic-addon1"
                    >
                      <AiFillCloseCircle className="fs-4 text-danger" />
                    </span>
                  )}
                </span>
                {errors.fecha_inicio?.type === "required" && (
                  <p className="text-danger"> El nombre es requerido </p>
                )}
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <div className="form-group">
                    <label for="date" className="form-label">
                      <b>Fecha de Termino</b>
                    </label>
                    <span className="input-group">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="fechatermino"
                        aria-label="Fecha de Termino"
                        id="fecha termino"
                        {...register("fecha_termino", {
                          required: true,
                        })}
                      />
                      {errors.fecha_termino?.type === "required" && (
                        <span
                          className="input-group-text bg-white border-start-0"
                          id="basic-addon1"
                        >
                          <AiFillCloseCircle className="fs-4 text-danger" />
                        </span>
                      )}
                    </span>
                    {errors.fecha_termino?.type === "required" && (
                      <p className="text-danger"> El nombre es requerido </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="comuna" className="form-label">
                    <b>Comuna</b>
                  </label>
                  <span className="input-group">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      placeholder="Selecciona tu comuna"
                      {...register("comuna_id", { required: true })}
                    >
                      {characters.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.nombre}
                        </option>
                      ))}
                    </select>
                    {errors.comuna_id?.type === "required" && (
                      <span
                        className="input-group-text bg-white border-start-0"
                        id="basic-addon1"
                      >
                        <AiFillCloseCircle className="fs-4 text-danger" />
                      </span>
                    )}
                  </span>
                  {errors.comuna_id?.type === "required" && (
                    <p className="text-danger">La comuna es requerida</p>
                  )}
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <div className="form-group">
                    <label for="area" className="control-label">
                    </label>

                    <span className="input-group">
                      <input
                        type="text"
                        rows="6"
                        className="form-control"
                        placeholder=" empresa"
                        aria-label=" empresa"
                        id=" empresa"
                        value={infoProfile.id}
                        
                        {...register("empresa_id", {
                          required: true,
                        })}
                      />
                      {errors.empresa_id?.type === "required" && (
                        <span
                          className="input-group-text bg-white border-start-0"
                          id="basic-addon1"
                        >
                          <AiFillCloseCircle className="fs-4 text-danger" />
                        </span>
                      )}
                    </span>
                    {errors.empresa_id?.type === "required" && (
                      <p className="text-danger"> Ingresa Empresa </p>
                    )}
                  </div>
                </div>
              </div>
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
