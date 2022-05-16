import React from "react";

function ProfileDataPerson() {
  return (
    <div className="container">
      <h2 className="pb-3 border-bottom">Datos personales</h2>
        <div className="row">
          <div className="col-3">
            <label>Nombre:</label>
          </div>
          <div className="col-9">
            <label>Anyelina</label>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Apellido:</label>
          </div>
          <div className="col-9">
            <label>Paredes</label>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Rut:</label>
          </div>
          <div className="col-9">
            <label>25.691.071-3</label>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Nacionalidad:</label>
          </div>
          <div className="col-9">
            <label>Dominicana</label>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Fecha de Nacimiento:</label>
          </div>
          <div className="col-9">
            <label>15-01-1994</label>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Nombre de la Instituccion:</label>
          </div>
          <div className="col-9">
            <label>DUOC UC</label>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Carrera:</label>
          </div>
          <div className="col-9">
            <label>Ingenieria en Prevencion de Riesgo</label>
          </div>
        </div>
    </div>
  );
}

export default ProfileDataPerson;
