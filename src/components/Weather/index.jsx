import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState(""); // State to store the city name input
  const [weatherData, setWeatherData] = useState(null); // weather data fetched from the API

  // API keys
  const weatherAPI = "d80a5e97b418450696733535d1602cdf"; // OpenWeather map API
  const geoCodingAPI = "084da7e553754a23b3ac4e462fa51e26"; //OpenCage Geocoding API

  //   fetch weather data from OpenWeatherMap API
  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPI}&units=metric`
      );
      // Set the weather data in the state
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Event handler for input change (city name)
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
  // Event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Fetching latitude and longitude using OpenCage Geocoding API
      const cityResponse = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${geoCodingAPI}`
      );
      // extracting latitude and longitude from the response
      const { lat, lng } = cityResponse.data.results[0].geometry;
      // Fetch weather data using latitude and longitude
      fetchWeatherData(lat, lng);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div>
          <h2>Weather in {city}</h2>

          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Feels like: {weatherData.main.feels_like} °C</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
