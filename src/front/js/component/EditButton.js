import React from "react";
import { BiEdit } from "react-icons/bi";

function EditButton({ texto, id }) {
  return (
    <button
      type="button"
      className="btn btn-info p-1 m-1"
      data-bs-toggle="modal"
      data-bs-target={id}
    >
      {texto} <BiEdit className="fs-4" />
    </button>
  );
}

export default EditButton;
