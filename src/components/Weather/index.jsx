import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";

const Weather = ({ city = "London" }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = "d80a5e97b418450696733535d1602cdf";
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(weatherUrl);
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city]);

  const displayWeatherVideo = (parameter) => {
    const videoMap = {
      Clouds: { src: "./video/clouds.mp4", width: 40, height: 40 },
      Thunderstorm: { src: "./video/thunderstrom.mp4", width: 25, height: 25 },
      Drizzle: { src: "./video/drizzle.mp4", width: 25, height: 25 },
      Rain: { src: "./video/rain.mp4", width: 25, height: 25 },
      Snow: { src: "./video/snow.mp4", width: 25, height: 25 },
      Clear: { src: "./video/clear.mp4", width: 25, height: 25 },
      Tornado: { src: "./video/tornado.mp4", width: 25, height: 25 },
      default: { src: "./video/foggy.mp4", width: 25, height: 25 },
    };

    const { src, width, height } = videoMap[parameter] || videoMap.default;

    return (
      <video width={width} height={height} autoPlay loop muted>
        <source src={src} type="video/mp4" />
      </video>
    );
  };

  return (
    <>
      <h5 className="text-dark-blue">Current Weather in {city}</h5>
      <div className="temperature d-flex">
        <p className="text-dark-blue fw-bold m-0">
          {weatherData && displayWeatherVideo(weatherData?.weather[0]?.main)}
        </p>
        <p> {weatherData && Math.round(weatherData.main.temp)}</p>
        <div className="video-wraper d-flex justify-content-center align-items-start">
          <video width="25" height="25" autoPlay loop muted>
            <source src="./video/celsius.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Weather;
