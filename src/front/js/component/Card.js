import PropTypes from "prop-types";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import EditButton from "../component/EditButton";

export const Card = ({ characters = [] }) => {
  return (
    <div className="container">
      <div className="row">
        {characters.map((item, index) => (
          <div className="col-md-4 col-ms-12 col-md-6 col-lg-3 g-4">
            <div className="card mb-3" key={index}>
              <img className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p>{item.titulo} </p>
                <p>{item.area} </p>
                <p>{item.carrerar_requerida} </p>
                <p className="card-text">
                  <p>{item.fecha_inicio} </p>
                  <p>{item.fecha_termino} </p>
                  <p>{item.empresa_id} </p>{" "}
                </p>
              </div>
              <div className="card-footer">
                <EditButton texto={"Ver Oferta"} id={item.empresa_id} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="modal-dialog modal-dialog-centered">...</div>
    </div>
  );
};
