import React from "react";

export default function Forecast(props) {
  let forecast = [
    {
      day: "Today",
      max: 32,
      min: 18,
    },
    {
      day: "Wednesday",
      max: 45,
      min: 17,
    },
    {
      day: "Thursday",
      max: 30,
      min: 10,
    },
    {
      day: "Friday",
      max: 50,
      min: 20,
    },
    {
      day: "Saturday",
      max: 43,
      min: 25,
    },
  ];
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-header">
        5 Day Forecast
        <i className="fa-regular fa-calendar-days"></i>
      </div>
      <ul className="list-group list-group-flush">
        {forecast.props.map(function (forecast, index) {
          return (
            <li key={index}>
              {forecast.day} {forecast.max}°/{forecast.min}°
            </li>
          );
        })}
      </ul>
    </div>
  );
}
