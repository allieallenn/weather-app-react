import React from "react";

export default function ForecastDay(props) {
  return (
    <div className="list-group-item">
      {props.day}
      <span className="float-right">
        {props.max}°/{props.min}°
      </span>
      <i className="fa-solid fa-cloud-showers-heavy float-right"></i>
    </div>
  );
}
