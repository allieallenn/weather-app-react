import React from "react";

/**
 * 
 * Props:
temp
description
humidity
wind
icon
 */
export default function Current(props) {
  return (
    <section className="current">
      <p id="currentDate"></p>
      <h1 className="city" id="searched-city">
        {props.city}
      </h1>
      <h1 id="temp">{props.temp}°</h1>
      <span className="units">
        <a href="/" id="celsius-link">
          °C
        </a>{" "}
        |
        <a href="/" id="fahrenheit-link">
          °F
        </a>
      </span>
      <p className="conditionIcon" id="currentCondition">
        <i className="fa-solid fa-cloud-rain conditionIcon">{props.icon}</i>{" "}
        {props.description}
      </p>
      <div id="weatherInfo">
        <p className="tempRange">
          H:{props.maxTemp}° L:{props.minTemp}°
        </p>
        <p id="humidity">Humidity: {props.humidity}%</p>
        <p id="windSpeed">Windspeed: {props.wind} MPH</p>
      </div>
    </section>
  );
}
