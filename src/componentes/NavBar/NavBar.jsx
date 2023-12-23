import CarWidget from "./CarWidget";
import "../NavBar/navBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {" "}
          <img
            className="logo"
            src="/img/0470801.jpg"
            alt="Five Nights at Freddy's"
          />
        </Link>
        <CarWidget />
        <button
          className="navbar-toggler"
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
                className="nav-link active"
                aria-current="page"
                to="/categoria/funko"
              >
                funko
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/categoria/Set">
                Set
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <nav className="navbar navbar-dark bg-dark text-white ">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       {" "}
    //       <img
    //         className="logo"
    //         src="/img/0470801.jpg"
    //         alt="Five Nights at Freddy's"
    //       />
    //     </Link>

    //     <CarWidget />

    //     <button
    //       className="navbar-toggler bg-dark"
    //       type="button"
    //       data-bs-toggle="offcanvas"
    //       data-bs-target="#offcanvasNavbar"
    //       aria-controls="offcanvasNavbar"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div
    //       className="offcanvas offcanvas-end"
    //       tabindex="-1"
    //       id="offcanvasNavbar"
    //       aria-labelledby="offcanvasNavbarLabel"
    //     >
    //       <div className="offcanvas-header ">
    //         <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
    //           Five Nights at Freddy's
    //         </h5>
    //         <button
    //           type="button"
    //           className="btn-close"
    //           data-bs-dismiss="offcanvas"
    //           aria-label="Close"
    //         ></button>
    //       </div>

    //       <Link
    //         className="nav-link active"
    //         aria-current="page"
    //         to="/categoria/funko"
    //       >
    //         funko
    //       </Link>

    //       <Link className="nav-link" to="/categoria/Set">
    //         Set
    //       </Link>

    //       <Link className="nav-link" to="/contact">
    //         Contact
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavBar;
