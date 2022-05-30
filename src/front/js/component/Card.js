import PropTypes from "prop-types";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

export const Card = ({ character = [] }) => {
  return (
    <div className="card mb-3">
      <img className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        <a href="#" className="btn btn-primary"></a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonTittle: PropTypes.string,
  image: PropTypes.any,
};
