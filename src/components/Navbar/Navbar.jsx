function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="_blank">
            <img
              src="https://pbe.choche.bond/api/files/pbc_3607937828/i85z6tb8lrg48vz/untitled_project_8_1gn72upmug.png?token="
              alt=""
              style={{ width: "7vh" }}
            />{" "}
            Erradica Cooperativa de trabajo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menú principal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="_blank"
                  >
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="_blank">
                    Quiénes somos
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="_blank"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contáctanos
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="_blank">
                        Opción de contacto 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="_blank">
                        Opción de contacto 2
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="_blank">
                        Opción de contacto 3
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3 " role="search">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Búsqueda"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form>
              <br />
              <form className="d-grid gap-2 col-6 mx-auto mt-5" role="login">
                <button
                  className="btn btn-wide btn-outline-success"
                  type="submit"
                >
                  Ingreso para colaboradores
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
