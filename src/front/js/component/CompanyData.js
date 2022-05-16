import React from "react";
function CompanyData() {
  return (
    <div className="container">
      <h2 className="pb-3 border-bottom">Datos Empresa</h2>
      <div className="row">
        <div className="col-md-3 .ms-md-auto">
          <label>Razon Social</label>
        </div>
        <div className="col-md-3 .ms-md-auto">
          <label>anyelina cocina</label>
        </div>
        <div className="row">
          <div className="col-md-3 .ms-md-auto">
            <label> RUN</label>
          </div>
          <div className="col-md-3 .ms-md-auto">
            <label>76-6666.666.-3</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 .ms-md-auto">
            <label>Encargado de la Empresa </label>
          </div>
          <div className="col-md-3 .ms-md-auto">
            <label></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyData;
