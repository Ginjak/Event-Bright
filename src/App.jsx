import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Event from "./components/Event";

function App() {
  return (
    <>
      <Router>
        <Header>
          <Navbar />
        </Header>
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
