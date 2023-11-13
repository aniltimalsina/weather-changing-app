import { useState } from "react";
import "../weather.css";
function WeatherApp() {
  const initialState = {
    temperature: "20 Deg",
    condition: "sunny",
    city: "Mississauga",
    description: "Its sunny",
    // Default weather condition
  };
  const [weatherDetail, setWeatherDetail] = useState(initialState);

  const getWeatherIcon = () => {
    switch (weatherDetail.condition) {
      case "sunny":
        return "☀️";
      case "rainy":
        return "🌧️";
      case "cloudy":
        return "☁️";
      default:
        return "☀️";
    }
  };

  const handleWeatherChange = (condition) => {
    setWeatherDetail((prevWeather) => ({
      ...prevWeather,
      condition,
      description: `Its ${condition}`,
    }));
  };
  return (
    <>
      <div className={`weather-app ${weatherDetail.condition}`}>
        <h1>{weatherDetail.city}</h1>
        <p>Temperature: {weatherDetail.temperature}°C</p>
        <p>Description: {weatherDetail.description}</p>
        <div className="weather-icon">{getWeatherIcon()}</div>
      </div>
      <div className="weather-buttons">
        <button onClick={() => handleWeatherChange("sunny")}>Sunny</button>
        <button onClick={() => handleWeatherChange("rainy")}>Rainy</button>
        <button onClick={() => handleWeatherChange("cloudy")}>Cloudy</button>
      </div>
    </>
  );
}

export default WeatherApp;
