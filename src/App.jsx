import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Socias from "./components/Main/Socias";
import Contact from "./components/Main/Contact";
import Quienes from "./components/Main/Quienes";
import Blog from "./components/Main/Blog";
import Inicio from "./components/Main/Inicio";
import Whatsapp from "./components/WhatsappBubble/Whatsapp";

function App() {
  return (
        <div className="App" style={{ paddingTop: "5vh", paddingBottom: "5vh" }}>
    <Router>
        <Navbar />
        <div className="d-sm-block d-xl-none pt-5">
          <Quienes />
        </div>
        <div className="d-none d-xl-block ">
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/quienes" element={<Quienes />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/socias" element={<Socias />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <div className=" d-sm-block d-xl-none mb-5 pb-5">
          <Inicio />
          <Contact />
          <Socias />
          <Blog />
        </div>
        <div className="d-sm-block d-xl-block" style={{ position: "fixed", bottom: "12.5vh", left: "80vw", zIndex: "1000",  }}>
          
        <Whatsapp />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
