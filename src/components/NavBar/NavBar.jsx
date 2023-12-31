import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to={"/"}>
        <a className="navbar-brand" href="#">Proyecto</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={"/category/IPhone"}>
            <a className="nav-link">IPhone</a>
            </Link>
            <Link to={"/category/AirPods"}>
            <a className="nav-link">AirPods</a>
            </Link>
          </div>
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
          
        </div>
      </div>
    </nav>
  )
}
