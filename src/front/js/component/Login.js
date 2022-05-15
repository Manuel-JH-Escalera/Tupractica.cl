import React from "react"

const Login = () => {

    return <div className="container w-50 mt-3 ">
        <h1 className="text-center">Bienvenido</h1>
        <h3 className="text-center">Inicia Sesion</h3>
        <form className="pt-5">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3 pt-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Recuerdame</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
}

export default Login