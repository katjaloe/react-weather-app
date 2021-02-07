import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [city, setCity] = useState(" ");
  let [result, setResult] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
  }

  function showWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed);
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    setResult(
      <ul>
        <li>Temperature: {temperature}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind}km/h</li>
        <li>
          {" "}
          <img src={icon} alt={description} />
        </li>
      </ul>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2218cbec7053bede118ce009e695cac4";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(showWeather);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />

        <input type="submit" value="search" />
      </form>
      <h2>{result}</h2>
    </div>
  );
}
