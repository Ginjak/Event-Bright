import "./hero.css";
import React, { useState } from "react";

function Hero({ herBg, title, par }) {
  return (
    <>
      <div
        id="jumbo-mini"
        className="jumbotron jumbotron-fluid py-5 ps-0"
        style={{ background: `url(${herBg})` }}
      >
        <div id="mini-overlay" className="container-fluid ms-0">
          <div className="container-fluid">
            <h1 className="display-4 text-white">{title}</h1>
            <p>{par}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
