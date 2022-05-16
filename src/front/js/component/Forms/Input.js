import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Input = ({ label, placeholder, type, name, error, regularexp}) => {
    return (
    <div className="mb-3 col-12">
        <label for={name} className="form-label">{label}</label>
        <span class="input-group">
            <input type={type} className="form-control border-end-0" id={name} aria-describedby="errorinput" placeholder={placeholder}/>
            <span class="input-group-text bg-white border-start-0" id="basic-addon1" ><AiFillCheckCircle className="fs-4 text-success "/></span>
        </span>
        <div id="errorinput" className="form-text">{error}</div>
    </div>)
}

export default Input