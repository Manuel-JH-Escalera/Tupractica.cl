import PropTypes from "prop-types";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import EditButton from "../component/EditButton";

export const Card = ({ characters = [] }) => {
  return (
    <div className="container">
      <div className="row">
        {characters.map((item, index) => (
          <div className="col-md-4 col-ms-12 col-md-6 col-lg-4 g-4">
            <div className="card mb-3" key={index}>
              <img className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="text-primary fs-3">
                  <strong>{item.titulo}</strong>{" "}
                </p>
                <p className="fw-light fs-4">
                  <strong> Carrera: {item.carrera_requerida} </strong>
                </p>
                <h4 className="fst-italic fs-6">{item.comuna.nombre} </h4>
              </div>
              <div className="card-footer">
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
