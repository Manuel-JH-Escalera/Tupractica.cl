import { instanceOf } from "prop-types";
import { useForm } from "react-hook-form";
import React, { useState, useEffect, useContext } from "react";

function ModalUser({ info = [] }) {
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
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-content">
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
                  {...register("nombre")}
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
        </div>
        </form>
      </div>
    </div>
  );
}

export default ModalUser;
