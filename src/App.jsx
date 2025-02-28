import { Suspense, lazy } from "react"; // Combine imports
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Main = lazy(() => {
  // No need for delayForDemo in production
  return delayForDemo(1500).then(() => import("./components/Main/Main"));
});

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={BigSpinner()}>
        {" "}
        {/* Use component directly */}
        <Main />
      </Suspense>
      <Footer />
    </>
  );
}

function BigSpinner() {
  return (
    <div>
      <img
        src="https://pbe.choche.bond/api/files/pbc_3607937828/i85z6tb8lrg48vz/untitled_project_8_1gn72upmug.png?token="
        alt=""
        style={{ width: "7vh" }}
      />{" "}
      <h2> Cargando...</h2>
    </div>
  );
}

const delayForDemo = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default App;
