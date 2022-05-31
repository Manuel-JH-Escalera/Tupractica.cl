import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { BiSearchAlt } from "react-icons/bi";
import FormatoInfo from "./FormatoInfo";
import JSONDATA from "../../DataPruebas/MOCK_DATA.json";

const Searcher = () => {
  const [trabajos, setTrabajos] = useState([]);
  const [comunas, setComunas] = useState([]);

  const initialUrl =
    "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/comuna";

  const fetchComunas = (initialUrl) => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => setComunas(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchComunas(initialUrl);
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function borrar(){
    setTrabajos([])
  }
  const onSubmit = (data) => {
    fetch(
      "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/api/filter",
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
        setTrabajos(response);
      })
      .catch((error) => console.error("Error:", error));
      
    console.log(data);

  };

  const [searchTerm, setSearchTerm] = useState("");

  function borrar(){
    setComunas("")
  }

  return (
    <>
      <h1 className="text-center mt-5">Busca tu Practica Profesional</h1>
      <div className="container w-50 pt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="input-group mb-3">
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon1"
              >
                <BiSearchAlt className="fs-4" />
              </button>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
                placeholder="Carrera"
                {...register("carrera_requerida")}
              />
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
                placeholder="Area"
                {...register("area")}
              />
              <span className="input-group">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  placeholder="Selecciona tu comuna"
                  {...register("comuna_id")}
                >
                  <option value="">Selecciona tu Comuna</option>
                  {comunas.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              </span>
              <button
                className="btn btn-outline-secondary"
                type="reset"
                id="button-addon1"
              ><BiSearchAlt className="fs-4" /></button>
            </div>
          </div>
        </form>
        <div className="container">
          <FormatoInfo trabajos={trabajos}/>
        </div>
      </div>
    </>
  );
};

export default Searcher;
