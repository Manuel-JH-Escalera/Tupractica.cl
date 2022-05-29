import React from "react"

const Bio = ({info=[]}) => {

    return <div className="container w-50 mt-2 ">
        <h3 className="text-center">{info.nombre + " " + info.apellido}</h3>
        <p>{info.biografia}</p>
    </div>
}

export default Bio