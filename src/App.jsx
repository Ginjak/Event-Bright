import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Event from "./components/Event";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Header>
          <Navbar />
        </Header>
        <Route>
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} /> */}
        </Route>
      </Router>
      <Footer />
    </>
  );
}
export default App;
