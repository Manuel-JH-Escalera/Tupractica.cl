import React from "react"
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import JSONDATA from "../../DataPruebas/MOCK_DATA.json"


const JobsPostCompany = () => {

    const [searchTerm, setSearchTerm] = useState("")

    return (
    <>  
    <h2 className="text-Start m-5">Nombre estas son las ofertas que has realizado:</h2>
        <div className="container w-50 ">
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

export default JobsPostCompany