import { instanceOf } from "prop-types";
import { useForm } from "react-hook-form";
import React, { useState, useEffect, useContext } from "react";

function ModalUser() {
  const onSubmit = (data) => {
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
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Postulando a
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
                  Practicante Id:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  {...register("Practicante_id", { required: true })}
                />
              </div>
              <div class="mb-3">
                <label for="nombre" class="form-label">
                  Empresa Id:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="apellido"
                  {...register("empresa_id")}
                />
              </div>
              <div class="mb-3">
                <label for="nombre" class="form-label">
                  Fecha de Postulación:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fecha_postulacion"
                  value={info.email}
                  {...register("fecha_postulacion")}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalUser;
