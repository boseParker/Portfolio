
import { Link } from 'react-router-dom';

function Navbar2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <Link className="nav-link text-light" to={'/'}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to={'/about'}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to={'/resume'}>
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to={'/projects'}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to={'/contact'}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
