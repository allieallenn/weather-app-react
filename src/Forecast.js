import React from "react";
import ForecastDay from "./Forecast-day";

export default function Forecast(props) {
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-header">
        5 Day Forecast
        <i className="fa-regular fa-calendar-days"></i>
      </div>
      <ul className="list-group list-group-flush">
        <ForecastDay day="Today" max="32" min="18" />
        <ForecastDay day="Wednesday" max="45" min="28" />
        <ForecastDay day="Thursday" max="30" min="10" />
        <ForecastDay day="Friday" max="67" min="30" />
        <ForecastDay day="Saturday" max="35" min="32" />
      </ul>
    </div>
  );
}
