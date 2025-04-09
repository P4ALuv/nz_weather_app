import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherCard({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_OPENWEATHERMAP_API_KEY}&units=metric`;
      try {
        const response = await axios.get(currentWeatherUrl);
        const currentWeather = response.data;
        setWeatherData(currentWeather);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (!weatherData) return <p>Loading weather data for {city}...</p>;

  const { main, weather, wind, sys } = weatherData;

  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">{city} Weather</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-info text-white">Temperature: {main.temp} °C</li>
          <li className="list-group-item bg-secondary text-white">Condition: {weather[0].description}</li>
          <li className="list-group-item bg-primary text-white">Humidity: {main.humidity}%</li>
          <li className="list-group-item bg-success text-white">Pressure: {main.pressure} hPa</li>
          <li className="list-group-item bg-warning text-dark">Wind Speed: {wind.speed} m/s</li>
          <li className="list-group-item bg-danger text-white">Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</li>
          <li className="list-group-item bg-dark text-white">Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}</li>
        </ul>
      </div>
    </div>
  );
}

export default WeatherCard;

