import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDetails from "./WeatherForecastDetails";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function showForecast(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name) {
        return (
            <div className="WeatherForecast row">
                <WeatherForecastDetails data={forecast.list[0]} />
                <WeatherForecastDetails data={forecast.list[1]} />
                <WeatherForecastDetails data={forecast.list[2]} />
                <WeatherForecastDetails data={forecast.list[3]} />
                <WeatherForecastDetails data={forecast.list[4]} />
                <WeatherForecastDetails data={forecast.list[5]} />
            </div>
        );
    }

    else {
    const apiKey = "4fa225c71f0cdf4d292b81e2e61f0d3c";
    const unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(showForecast);
    return null;
    }
}