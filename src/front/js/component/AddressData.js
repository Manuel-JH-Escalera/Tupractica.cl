import React from "react";
function AddressData({info=[]}) {
  return (
    <div className="container">
      <div className="row justify-content-start pt-5">
        <h2 className="pb-2 border-bottom">Datos de domicilio</h2>
      </div>
      <div className="row">
      </div>
      <div className="row">
        <div className="col-3">
          <label>Comuna:</label>
        </div>
        <div className="col-9">{info.comuna_id}</div>
      </div>
    </div>
  );
}

export default AddressData;
