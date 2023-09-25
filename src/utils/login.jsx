function Login() {
    return (
        <div className="container bg-dark text-center mb-5">
            <h1 className="text-light">Login dlu bang</h1>
            <div className="mb-3 row text-light">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="staticEmail"></input>
                </div>
            </div>
            <div className="mb-3 row text-light">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword"></input>
                </div>
            </div>
            <div className="d-flex flex-row-reverse">
                <button type="submit" className="btn btn-primary mb-3 col-3">Submit</button>
                <div className="container text-start mt-2">
                <p><a href="#" className="link-info">Buat akun</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login