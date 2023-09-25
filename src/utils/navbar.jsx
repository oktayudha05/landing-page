
function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg bg-dark text-light">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Navbar</a>
        <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse text-light" id="navbarNavAltMarkup">
          <div className="navbar-nav text-light">
            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
            <a className="nav-link text-light" href="#">Features</a>
            <a className="nav-link text-light" href="#">Pricing</a>
            <a className="nav-link disabled text-light-emphasis" aria-disabled="true">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
    
export default Navbar