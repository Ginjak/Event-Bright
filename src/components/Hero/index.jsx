import "./hero.css";
import React, { useState } from "react";

function Hero({ herBg, title }) {
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
            {/* <p className="lead text-white mb-5">
              What's on, where, and how the weather is there!
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
