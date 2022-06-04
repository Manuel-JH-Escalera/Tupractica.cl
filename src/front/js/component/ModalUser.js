import { instanceOf } from "prop-types";
import { useForm } from "react-hook-form";
import React, { useState, useEffect, useContext } from "react";

function ModalUser({ info = [] }) {
  const onSubmit = (data) => {
    fetch(
      "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/api/user-register/edit",
      {
        method: "PUT", // or 'PUT'
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

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {info.nombre} Edita tu Perfil
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div class="mb-3">
                <label for="nombre" class="form-label">
                  Nombre:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  value={info.nombre}
                  {...register("nombre", { required: true })}
                />
                {errors.nombre?.type === "required" && (
                  <p className="text-danger"> El nombre es requerido </p>
                )}
              </div>
              <div class="mb-3">
                <label for="nombre" class="form-label">
                  Apellido:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="apellido"
                  value={info.apellido}
                  {...register("apellido")}
                />
              </div>
              <div class="mb-3">
                <label for="nombre" class="form-label">
                  Email:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  value={info.email}
                  {...register("email")}
                />
              </div>
              <div class="mb-3">
                <label for="nombre" class="form-label">
                  Fecha de Nacimiento:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fecha_nacimiento"
                  value={info.fecha_nacimiento}
                  {...register("fecha_nacimiento")}
                />
              </div>
              <div class="mb-3">
                <label for="nombre" class="form-label">
                  Institucion:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="institucion"
                  value={info.institucion}
                  {...register("institucion")}
                />
              </div>
              <div class="mb-3">
                <label for="nombre" class="form-label">
                  Carrera:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="carrera_estudio"
                  value={info.biografia}
                  {...register("biografia")}
                />
              </div>
              <div class="mb-0">
                <label for="nombre" class="form-label">
                </label>
                <input
                  type="text"
                  class="form-control border-0 text-white"
                  id="nombre"
                  value="1"
                  {...register("comuna_id")}
                />
              </div>
            </div>
            <div className="modal-footer p-0">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalUser;
