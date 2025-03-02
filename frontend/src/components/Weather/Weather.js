import React, { useState } from "react";
import "./weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city");
      return;
    }

    try {
      setError("");
      setWeather(null);
      const response = await fetch(`http://localhost:4000/api/weather?city=${city}`);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError("Failed to fetch weather. Try again.");
    }
  };

  return (
    <div className="weather-container">
      <h2>Global Weather Checker</h2>
      <input 
        type="text" 
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Check Weather</button>

      {error && <p className="error-message">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h3>{weather.name}</h3>
          <p>🌡 Temperature: {weather.main.temp}°C</p>
          <p>☁ Condition: {weather.weather[0].description}</p>
          <img 
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} 
            alt="Weather icon"
          />
        </div>
      )}
    </div>
  );
};

export default Weather;
