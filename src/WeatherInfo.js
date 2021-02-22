  import React from "react";
  import FormattedDate from "./FormattedDate";
  import WeatherIcon from "./WeatherIcon";
  import UnitConversion from "./UnitConversion";
  import "./WeatherInfo.css";
  

 export default function WeatherInfo(props) {
     return (
        <div>
  <h2 id="city">{props.data.city}</h2>
  <ul>
    <li>Last updated: <span class="today" id="date"><FormattedDate date={props.data.date} /></span> </li>
  <li><span class="terms">{props.data.description}</span><br /></li>
    </ul>
            <div class="row">
              <div class="col-6">
                <div class="clearfix weather-temperature">
                <div className="float-left">
                    <WeatherIcon code={props.data.icon}/>
                    </div>
                  <div class="float-left">
                    <UnitConversion celsius={props.data.temperature} />
              </div>
              </div>
              </div>
              <div class="col-6">
                <ul>
                  <li>Humidity: <span>{props.data.humidity}</span>%</li>
                  <li>Wind: <span>{props.data.wind}</span> km/h</li>
                </ul>
              </div>
              
            </div>
            </div>
     );
  }