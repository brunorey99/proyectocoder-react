import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Proyecto</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Lorem</a>
            <a className="nav-link" href="#">Lorem</a>
            <a className="nav-link" href="#">Lorem</a>
            <a className="nav-link" href="#">Lorem</a>
          </div>
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}
