import React from "react";
import { BotonPostular } from "./BotonPostular";
import ModalOferta from "./ModalOferta";
import { useForm } from "react-hook-form";

const FormatoInfo = ({ trabajos = [], info = [] }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  hoy.toLocaleDateString(); // "14/6/2020"

  return (
    <div className="container">
      {trabajos.map((item, index) => (
        <>
          <li
            className="row bg-light border border-secondary p-2 mt-2"
            key={index}
          >
            <div className="row">
              <h4 className="col-9 pt-1">{item.titulo}</h4>
              <p className="col-3">{item.empresa.razon_social}</p>
              <p className="col-3">{item.carrera_requerida}</p>
              <p className="col-3">{item.area}</p>
            </div>
            <button
              type="button"
              className="btn btn-secondary w-25"
              data-bs-toggle="modal"
              data-bs-target="#hola"
            >
              Postular
            </button>
          </li>
          <div
            class="modal fade"
            id="hola"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <form /* onSubmit={handleSubmit(onSubmit)} */>
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      ¿Quieres postular a esta oferta? {index}
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <label for="firstname" className="form-label">
                      <b>Fecha_Postulacion</b>
                    </label>
                    <span class="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Escribe tu nombre"
                        aria-label="Nombre"
                        id="Nombre"
                        value={hoy.toLocaleDateString()}
                        {...register("fecha_postulacion")}
                      />
                    </span>
                    <label for="firstname" className="form-label">
                      <b>practicante_id</b>
                    </label>
                    <span class="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Escribe tu nombre"
                        aria-label="Nombre"
                        id="Nombre"
                        value={info.id}
                        {...register("practicante_id")}
                      />
                    </span>
                    <label for="firstname" className="form-label">
                      <b>oferta_id</b>
                    </label>
                    <span class="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Escribe tu nombre"
                        aria-label="Nombre"
                        id="Nombre"
                        value={item.empresa.id}
                        {...register("oferta_id")}
                      />
                    </span>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      No
                    </button>
                    <button type="submit" class="btn btn-primary">
                      Si
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default FormatoInfo;
