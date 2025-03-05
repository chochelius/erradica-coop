import { createPopper } from '@popperjs/core';
import { Link } from 'react-router-dom'



function Navbar() {

  const button = document.querySelector('#button');
  const tooltip = document.querySelector('#tooltip');

  createPopper(button, tooltip, {
    placement: 'bottom',
  });


  return (
    <div >
      <nav className="navbar fixed-top" style={{ backgroundColor: "#CB8D5A", opacity: "0.9" }} >
        <div className="container-fluid">
<div className='d-inline'>
<Link to="/" className="navbar-brand"> 
                      <img
              src="https://pocketbase.erradica.cl/api/files/pbc_3607937828/i85z6tb8lrg48vz/untitled_project_8_1gn72upmug.png?token="
              alt=""
              style={{ width: "7vh" }}
            />{" "}
            ERRADICA
            <p className='d-inline d-none d-md-inline'> COOPERATIVA DE TRABAJO</p>
          </Link>
</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"><a data-bs-toggle="tooltip" data-bs-title="Default tooltip"></a></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ backgroundColor: "#CB8D5A", opacity: "0.9" }}
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
                  <Link to="/" className="nav-link active" aria-current="page">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/quienes" className="nav-link">
                    Sobre Nosotras
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contáctanos
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to ="/socias" className="nav-link">
                    Socias fundadoras
                  </Link>
                </li>

              </ul>
              <form className="d-flex mt-3 " role="search">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Búsqueda"
                  aria-label="Search"
                />
                <a href="/" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Busqueda desactivada">

                  <button type="button" className="btn btn-outline-dark" disabled>
                    Buscar
                  </button></a>
              </form>
              <br />
              <a className="d-grid gap-2 col-6 mx-auto mt-5" href='http://login.erradica.cl' role="login">
                <button
                  className="btn btn-wide btn-outline-dark"
                  type="submit"
                >
                  Ingreso para colaboradores
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
