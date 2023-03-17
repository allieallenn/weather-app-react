import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./Forecast-day";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    const apiKey = "017d56650cd168d68067850318775d43";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className="card" style={{ width: "30rem" }}>
        <div className="card-header">
          5 Day Forecast
          <i className="fa-regular fa-calendar-days"></i>
        </div>
        <ul className="list-group list-group-flush">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    load();

    return null;
  }
}
