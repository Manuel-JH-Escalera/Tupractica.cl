import { instanceOf } from "prop-types";
import { useForm } from "react-hook-form";
import React, { useState, useEffect, useContext } from "react";

function ModalOferta({info=[],trabajos=[]}) {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  hoy.toLocaleDateString(); // "14/6/2020"

  return (
    <div
      class="modal fade"
      id="exampleMod"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <form /* onSubmit={handleSubmit(onSubmit)} */>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ¿Quieres postular a esta oferta?
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
                  value={info.practicante_id}
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
                  value={trabajos.oferta_id}
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
  );
}

export default ModalOferta;
