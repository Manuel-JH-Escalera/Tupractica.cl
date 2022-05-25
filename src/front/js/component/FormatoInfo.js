import React from "react";
const FormatoInfo = ({characters=[], img, name, info}) => {
    return (
    <div className="container">
        {
            characters.map((item, index) => (
                <li className="row bg-light border border-secondary p-2 mt-2" key={index}>
                <h4 className="col-9 pt-1">{item.titulo}</h4>
                <button type="button" className="btn btn-outline-secondary col-3">Postular</button>
                </li>
            ))
        }
        
    </div>
    )
}

export default FormatoInfo