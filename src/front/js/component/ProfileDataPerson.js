import React from "react";

function ProfileDataPerson({info=[]}) {
  return (
    <div className="container">
      <h2 className="pb-3 border-bottom">Datos personales</h2>
        <div className="row">
          <div className="col-3">
            <label>Nombre:</label>
          </div>
          <div className="col-9">
            <label>{info.nombre}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Apellido:</label>
          </div>
          <div className="col-9">
            <label>{info.apellido}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Fecha de Nacimiento:</label>
          </div>
          <div className="col-9">
            <label>{info.fecha_nacimiento}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Nombre de la Instituccion:</label>
          </div>
          <div className="col-9">
            <label>{info.institucion}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Carrera:</label>
          </div>
          <div className="col-9">
            <label>{info.carrera_estudio}</label>
          </div>
        </div>
    </div>
  );
}

export default ProfileDataPerson;
