import React from "react";
function ContacInformation({info=[]}) {
  return (
    <div className="container">
      <div className="row pt-5">
        <h2 className="pb-2 border-bottom">Datos de contacto</h2>
      </div>
      <div className="row">
        <div className="col-3">
          <label>Correo electronico:</label>
        </div>
        <div className="col-9">
          {info.email}
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <label>Teléfono:</label>
        </div>
        <div className="col-9">{info.telefono}</div>
      </div>
    </div>
  );
}

export default ContacInformation;
