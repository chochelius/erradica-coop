import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Socias from "./components/Main/Socias";
import Contact from "./components/Main/Contact";
import Quienes from "./components/Main/Quienes";
import Blog from "./components/Main/Blog";
import Inicio from "./components/Main/Inicio";



function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/quienes" element={<Quienes />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/socias" element={<Socias />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />

      </Router>
    </div>
  );
}


export default App;