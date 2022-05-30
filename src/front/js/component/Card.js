import PropTypes from "prop-types";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

export const Card = ({ characters = [], img }) => {
  return (
    <div className="container">
      {characters.map((item, index) => (
        <div className="card mb-3 col-ms-12 col-md-6 col-lg-3 g-4" key={index}>
          <img className="card-img-top" src={img} />
          <div className="card-body">
            <h5 className="card-title"> {item.empresa.razon_social}</h5>
            <p>{item.titulo} </p>
            <p>{item.area} </p>
            <p className="card-text"></p>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">
                Postular
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
