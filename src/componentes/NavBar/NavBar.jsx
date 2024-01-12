import CarWidget from "./CarWidget";
import "../NavBar/navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {" "}
          <img
            className="logo"
            src="img/logo.jpg"
            alt="Five Nights at Freddy's"
          />
        </Link>

        <button
          className="navbar-toggler bg-white "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active link-light"
                aria-current="page"
                to="/productos"
              >
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active link-light"
                aria-current="page"
                to="/categoria/funko"
              >
                Categoria Funkos
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link link-light" to="/categoria/Set">
                Categoria Sets
              </Link>
            </li>
          </ul>
        </div>
        <CarWidget />
      </div>
    </nav>
  );
};

export default NavBar;
