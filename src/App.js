import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Research from "./components/Research/Research";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Opportunities from "./components/Opportunities/Opportunities";
import Contact from "./components/Contact/Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/project" element={<Projects />} />
          <Route path="/portfolio/research" element={<Research />} />
          <Route path="/portfolio/opportunities" element={<Opportunities />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<Navigate to="/portfolio/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
