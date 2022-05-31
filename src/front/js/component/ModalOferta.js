import { instanceOf } from "prop-types";
import { useForm } from "react-hook-form";
import React, { useState, useEffect, useContext } from "react";

function ModalOferta({ characters = [] }) {
  return (<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>)
  
  /* (
    <div
      className="modal fade"
      id={characters.id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      {characters.map((item, index) => (
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Oferta
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3 " key={index}>
                  <label for="nombre" className="form-label">
                    {item.titulo}
                  </label>
                </div>
                <div className="mb-3">
                  <label for="nombre" className="form-label">
                    {item.descripcion}
                  </label>
                </div>
                <div className="mb-3">
                  <label for="nombre" className="form-label">
                    {item.carrerar_requerida}
                  </label>
                </div>
                <div className="mb-3">
                  <label for="nombre" className="form-label">
                    {item.area}
                  </label>
                </div>
                <div className="mb-3">
                  <label for="nombre" className="form-label">
                    {item.fecha_inicio}
                  </label>
                </div>
                <div className="mb-3">
                  <label for="nombre" className="form-label">
                    {item.fecha_termino}
                  </label>
                </div>
                <div className="mb-3">
                  <label for="nombre" className="form-label">
                    {item.empresa_id}
                  </label>
                </div>
                <div className="mb-3">
                  <label for="nombre" className="form-label">
                    {item.comuna_id}
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      ))}
    </div>
  ); */
}

export default ModalOferta;
