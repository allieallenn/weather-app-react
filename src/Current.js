import React from "react";

export default function Current(props) {
  return (
    <section class="current">
      <p id="currentDate"></p>
      <h1 class="city" id="searched-city">
        Dallas, Tx
      </h1>
      <h1 id="temp">60°</h1>
      <span class="units">
        <a href="/" id="celsius-link">
          °C
        </a>{" "}
        |
        <a href="/" id="fahrenheit-link">
          °F
        </a>
      </span>
      <p class="conditionIcon" id="currentCondition">
        <i class="fa-solid fa-cloud-rain" className="conditionIcon"></i> Rainy
      </p>
      <div id="weatherInfo">
        <p class="tempRange">H:45° L:40°</p>
        <p id="humidity">Humidity: 20%</p>
        <p id="windSpeed">Windspeed: 24 MPH</p>
      </div>
    </section>
  );
}
