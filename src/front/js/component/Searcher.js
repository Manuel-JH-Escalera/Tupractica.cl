import React from "react"
import { BiSearchAlt } from "react-icons/bi";

const Searcher = () => {

    return (
    <>  
    <h1 className="text-center mt-5">Busca tu Practica Profesional</h1>
    <div className="container w-50 pt-5">
        <div className="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button" id="button-addon1"><BiSearchAlt className="fs-4"/></button>
        <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filtrar</button>
        <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
        </div>
    </div>
    </>)
}

export default Searcher