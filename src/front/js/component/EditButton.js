import React from "react";
import { BiEdit } from "react-icons/bi";

function EditButton() {
  return (
    <button type="button" className="btn btn-info p-1 m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Editar Perfil <BiEdit className="fs-4"/>
    </button>
  );
}

export default EditButton;