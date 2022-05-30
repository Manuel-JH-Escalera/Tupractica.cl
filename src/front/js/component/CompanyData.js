import React from "react";
function CompanyData({info=[]}) {
  return (
    <div className="container">
      <h2 className="pb-3 border-bottom">Datos Empresa</h2>
        <div className="row">
          <div className="col-3">
            <label>Razon Social:</label>
          </div>
          <div className="col-9">
            <label>{info.razon_social}</label>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>RUN:</label>
          </div>
          <div className="col-9">
            <label>76-6666.666.-3</label>
          </div>
        </div>
    </div>
  );
}

export default CompanyData;
