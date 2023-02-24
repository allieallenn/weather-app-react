import React from "react";

export default function ForecastDay(props) {
  return (
    <li className="list-group-item">
      {props.day}
      <span class="float-right">
        {props.max}°/{props.min}°
      </span>
      <i className="fa-solid fa-cloud-showers-heavy float-right"></i>
    </li>
  );
}