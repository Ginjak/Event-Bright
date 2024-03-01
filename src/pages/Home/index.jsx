import "./home.css";
import Weather from "../../components/Weather";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="weather">
        <Weather />
      </div>
    </div>
  );
};

export default Home;
