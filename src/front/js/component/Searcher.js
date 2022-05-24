import React from "react"
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import JSONDATA from "/workspace/Proyecto-Final/src/DataPruebas/MOCK_DATA.json"
 

const Searcher = () => {

    const [searchTerm, setSearchTerm] = useState("")

    return (
    <>  
    <h1 className="text-center mt-5">Busca tu Practica Profesional</h1>
    <div className="container w-50 pt-5">
        <div className="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button" id="button-addon1"><BiSearchAlt className="fs-4"/></button>
        <input type="text" className="form-control" aria-label="Text input with dropdown button" onChange={event => {setSearchTerm(event.target.value)}}/>
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filtrar</button>
        <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
        </div>
        <ul className="mt-4 p-0">
            {JSONDATA.filter((val) => {
                if (searchTerm == "") {
                    return val
                } else if (val.nombre.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (<li className="row bg-light border border-secondary p-2 mt-2" key={key}>
                <h4 className="col-9 pt-1">{val.nombre}</h4>
                <button type="button" className="btn btn-outline-secondary col-3">Postular</button>
            </li>)
            })}
        </ul>
    </div>
    </>)
}

export default Searcher