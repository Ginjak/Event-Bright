import "./hero.css";
import React from "react";

// Hero component using props to display Heading, background image on section,
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
