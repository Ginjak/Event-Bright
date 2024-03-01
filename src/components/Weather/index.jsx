import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Weather = ({ city = "London" }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = "d80a5e97b418450696733535d1602cdf";
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(weatherUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Current Weather in {city}
        </Typography>
        {weatherData && (
          <>
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
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default Weather;
