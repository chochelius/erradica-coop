import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const LazyRouter = lazy(() => {
  //random delay time from 200 to 2000 ms
  const delay = Math.floor(Math.random() * 1800) + 200;
  return delayForDemo(delay).then(() => import("./components/Main/Inicio"));
});

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={BigSpinner()}>
        <BrowserRouter>
          <LazyRouter />

        </BrowserRouter>
      </Suspense>
      <Footer />
    </div>
  );
}

function BigSpinner() {
  return (
    <div>
      <img
        src="https://pocketbase.erradica.cl/api/files/pbc_3607937828/i85z6tb8lrg48vz/untitled_project_8_1gn72upmug.png?token="
        alt=""
        className="erradica-logo"
        style={{ width: "7vh", marginTop: "35vh" }}
      />{" "}
      <h2> Cargando...</h2>
    </div>
  );
}

const delayForDemo = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default App;