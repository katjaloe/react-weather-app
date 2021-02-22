import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);



  function showWeather(response) {
      setWeatherData({
    ready : true,
     date : new Date(response.data.dt * 1000),
     temperature : Math.round(response.data.main.temp),
     description : response.data.weather[0].description,
     humidity : response.data.main.humidity,
     wind : response.data.wind.speed,
     icon : response.data.weather[0].icon,
     city : response.data.name,
});
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }


  function search() {
    const apiKey = "4fa225c71f0cdf4d292b81e2e61f0d3c";
    const unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(showWeather);
  }


  if (weatherData.ready) {
      return (
    <div>
      <form onSubmit={handleSubmit}>
          <div className="row">
              <div className="col-9">
        <input type="search" placeholder="Type a city" onChange={updateCity} className="form-control" />
</div>

<div className="col-3">
        <input type="submit" value="search" className="btn btn-secondary w-100"/>
        </div>
        </div>

      </form>
      <WeatherInfo data={weatherData} />
    </div>
  );
}
else {
    search();
    return "Loading...";
}
}



          

  
    