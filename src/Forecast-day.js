import React from "react";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div>
      <div>
        <div className="list-group-item">
          {day()}
          <span className="float-right">
            {maxTemperature()}/{minTemperature()}
          </span>
        </div>
        <i className={`${props.icon} conditionIcon float-right`}></i>
      </div>
    </div>
  );
}
