import React from "react";
function AddressData() {
  return (
    <div className="container">
      <div className="row justify-content-start pt-5">
        <h2 className="pb-2 border-bottom">Datos de domicilio</h2>
      </div>
      <div className="row justify-content-start">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <label>Calle/Avenida :</label>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9 info-align"> indepe</div>
      </div>
      <div className="row justify-content-start">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <label>Número Calle/Avenida :</label>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9 info-align"> 321</div>
      </div>
      <div className="row justify-content-start">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <label>Número Casa/depto:</label>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9 info-align">232</div>
      </div>
      <div className="row justify-content-start">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <label>Región: </label>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9 info-align">2e2</div>
      </div>
      <div className="row justify-content-start">
        <div className="col-xs-12 col-sm-4 col-md-3">
          <label>Comuna :</label>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9 info-align">2e2</div>
      </div>
    </div>
  );
}

export default AddressData;
