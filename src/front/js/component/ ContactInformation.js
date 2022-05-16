import React from "react";
function ContacInformation() {
  return (
    <div className="container">
      <div className="row pt-5">
        <h2 className="pb-2 border-bottom">Datos de contacto</h2>
      </div>
      <div className="row justify-content-start">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <label>Correo electronico *</label>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9 info-align">
          tiendaonlineglamourybelleza@gmail.com
        </div>
      </div>
      <div className="row justify-content-start">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <label>Teléfono principal *</label>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9 info-align">egege</div>
      </div>
      <div className="row justify-content-start">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <label>Teléfono secundario</label>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9 info-align"> grg</div>
      </div>
    </div>
  );
}

export default ContacInformation;
