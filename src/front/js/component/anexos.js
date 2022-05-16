import React from "react";

function Anexos() {
  return (
    <div className="container">
      <div className="row justify-content-start pt-5">
        <h2 className="pb-2 border-bottom">Mis Documento</h2>
      </div>
      <div className="row justify-content-start">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <label>CURRÍCULUM VITAE:</label>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9 info-align">
          {" "}
          <input
            type="file"
            className="SUBIR DOCUMENTO"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
          />
        </div>
      </div>
      <div className="row justify-content-start pt-4">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <label>CERTIFICADO DE ALUMNO REGULAR:</label>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9 info-align">
          {" "}
          <input
            type="file"
            className="SUBIR DOCUMENTO"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
          />
        </div>
      </div>
    </div>
  );
}

export default Anexos;
