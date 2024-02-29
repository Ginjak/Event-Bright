import React, { useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
      console.log("Object: ", response.data);
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
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter city name"
            variant="outlined"
            value={city}
            onChange={handleInputChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Get Weather
          </Button>
        </form>
        {weatherData && (
          <Card
            variant="outlined"
            style={{ width: "fit-content", marginTop: 20 }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Weather in {city}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Temperature: {weatherData.main.temp} °C
              </Typography>
              <Typography variant="body1" gutterBottom>
                Feels like: {weatherData.main.feels_like} °C
              </Typography>
              <Typography variant="body1" gutterBottom>
                Humidity: {weatherData.main.humidity} %
              </Typography>
              <Typography variant="body1" gutterBottom>
                Wind Speed: {weatherData.wind.speed} m/s
              </Typography>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};

export default Weather;
