

function Socias() {
  return (
    <div className="container" style={{ paddingTop: "12vh" }}>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://pbe.choche.bond/api/files/pbc_3607937828/jrv7694ucn90lh8/1738309717102_2rf6eadttw.JPG?token=" className="d-block w-50 mx-auto" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Paulina Rebolledo</h5>
              <p>Representante legal y Abogada</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://pbe.choche.bond/api/files/pbc_3607937828/43x6b05f8m95548/1738309710406_jk0hw0rriq.JPG?token=" className="d-block w-50 mx-auto" alt="..." />
            <div className="carousel-caption d-none d-md-block ">
              <h5>Consuelo Zarzar</h5>
              <p>Trabajadora Social</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://pbe.choche.bond/api/files/pbc_3607937828/c070t3w6iwje3p8/1738309723528_r5zy3g8pdb.JPG?token=" className="d-block w-50 mx-auto" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Giannina Jaramillo</h5>
              <p>Cientista político</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
}

export default Socias;
