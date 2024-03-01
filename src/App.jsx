import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Event from "./components/Event";
import Contactform from "./components/Contactform";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Eventcard from "./components/Eventcard";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header>
          <Navbar />
        </Header>
        <Hero />
        <Searchbar />
        <Eventcard />
        <Event />
        <About />
        <Contactform />
        <Routes>
          <Route path="/results" element={<Results />} />
          <Route path="/event" element={<Event />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
export default App;
