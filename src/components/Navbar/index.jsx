import "./navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="../public/eventBright-logo.png" alt="" width="30" height="24"/>
    </a>
    <a class="navbar-brand" href="#">EventBright</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">About</a>
        <a class="nav-link" href="#">Contact</a>
        <a class="nav-link" href="#">Weather</a>
      </div>
    </div>
  </div>
</nav>
</>
  );
};

export default Navbar;
