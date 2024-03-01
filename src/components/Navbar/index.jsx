import "./navbar.css";
import React from "react";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/eventBright-logo.png" alt="" width="30" height="24" />
          </a>
          <a className="navbar-brand" href="#">
            EventBright
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
              <a className="nav-link" href="#">
                Weather
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
