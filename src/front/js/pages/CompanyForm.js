import React from "react"

const CompanyForm = () => {

    /* preventDefault = () => {
        preventDefault()
    } */

    return <div className="container w-50 mt-3">
    <div className="row">
    <form>
        <div className="card col-sm-12 col-md-12 col-lg-12">
            <div className="card-header fs-1 bg-info text-center">
                <h1 className="card-title">Registro Para Empresas</h1>
            </div>
            <div className="card-body">
                <div className="alert alert-danger error" role="alert" id="error">
                    <b>Algunos campos estan incompletos.</b>
                </div>
                <div className="row pb-1">
                    <div className="col">
                        <label for="companyname" className="form-label"><b>Nombre de la Empresa</b></label>
                        <input type="text" className="form-control" placeholder="Nombre de la Empresa" aria-label="First name" id="companyname"/>
                    </div>
                </div>
                <div className="row pb-1 ">
                    <div className="col">
                        <label for="nameincharge" className="form-label"><b>Nombres de la Persona Encargada de la Cuenta</b></label>
                        <input type="text" className="form-control" placeholder="Tus apellidos" aria-label="Last name" id="nameincharge"/>
                    </div>
                </div>
                <div className="row pb-1">
                    <div className="col">
                        <label for="lastnameincharge" className="form-label"><b>Apellidos de la Persona Encargada de la Cuenta</b></label>
                        <input type="text" className="form-control" placeholder="Tus apellidos" aria-label="Last name" id="lastnameincharge"/>
                    </div>
                </div>
                <div className="row pb-1">
                    <div className="col">
                        <label for="mail" className="form-label"><b>Correo Electronico</b></label>
                        <input type="mail" className="form-control" placeholder="escribe@tucorreo.com" aria-label="Last name" id="mail"/>
                    </div>
                </div>
                <div className="row pb-1">
                    <div className="col">
                        <label for="password" className="form-label"><b>Contraseña</b></label>
                        <input type="password" className="form-control" placeholder="Tu Contraseña" aria-label="Last name" id="password"/>
                    </div>
                </div>
                <div className="row pb-1">
                    <div className="col">
                        <label for="lastnameincharge" className="form-label"><b>Rut de la Empresa</b></label>
                        <input type="number" className="form-control" placeholder="Rut" aria-label="Last name" id="lastnameincharge"/>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="row d-md-flex gap-2 justify-content-center">
                    <button type="submit" className="btn btn-primary btn-lg" /* onSubmit={(preventDefault)} */>Registrame</button>
                    <button type="reset" className="btn btn-secondary btn-lg">Limpiar</button>
                </div>
            </div>
        </div>           
    </form>
    </div>
</div> 
}

export default CompanyForm