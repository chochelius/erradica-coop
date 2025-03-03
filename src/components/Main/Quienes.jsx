
function Quienes() {
  return (
    <div className="container" style={{ paddingTop: "12vh", paddingBottom: "30vh" }}>
      <p className="fw-bold fs-2 pt-1"> ¿Quiénes sómos?</p>
      <p className="fs-6">
        Somos una cooperativa constituida fundamentalmente por un grupo de mujeres profesionales y en proceso de titulación con un profundo sentido de la igualdad y equidad social, que tiene como misión desarrollar acompañamientos de carácter multidisciplinario a personas que se encuentran en situación de vulnerabilidad social y requieran de apoyo jurídico y psicosocial.
      </p>
      <p className="fw-bold fs-2 pt-1"> ¿Cuál es nuestra misión?</p>
      <p className="fs-6">
        Defender y promover los derechos de las personas en situación de vulnerabilidad socioeconómica, proporcionando asistencia jurídica, psicológica, social y educativa de alta calidad. Además, nos comprometemos a intervenir psicoeducativamente con personas privadas de libertad, tanto imputadas como condenadas, con el fin de facilitar su reinserción social y contribuir a la construcción de un entorno más inclusivo y solidario.
      </p>
      <p className="fw-bold fs-2 pt-1"> ¿Cuál es nuestra visión?</p>
      <p className="fs-6">
        Ser reconocidas como líderes en la promoción y protección de los derechos humanos, brindando una asistencia integral y de calidad a personas en situación de vulnerabilidad socioeconómica y a aquellos privados de libertad, contribuyendo así a una sociedad más justa y equitativa
      </p>
      <p className="fw-bold fs-2 pt-1"> ¿Cuáles son nuestros valores?</p>
      
        <ul className="list-group list-group-flush" style={{ backgroundColor: "#D8A882", opacity: "0.9" }}>
        <li className="list-group-item list-group-item-warning">
            <p className="fw-bold">
            Dignidad humana
            </p>
          </li>
          <li  className="list-group-item list-group-item-warning">
            <p className="fw-bold">
            Justicia
            </p>
          </li>
          <li className="list-group-item list-group-item-warning">
            <p className="fw-bold">
            No discriminación
            </p>
          </li>
          <li className="list-group-item list-group-item-warning">
            <p className="fw-bold">
            Equidad social
            </p>
          </li>
          <li className="list-group-item list-group-item-warning">
            <p className="fw-bold">
            Perspectiva interseccional
            </p>
          </li>
        </ul>
      
    </div>

  );
}

export default Quienes;
