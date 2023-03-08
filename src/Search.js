import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showWeather);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }
  // eslint-disable-next-line
  let [temp, setTemp] = useState("");
  // eslint-disable-next-line
  let [description, setDescription] = useState("");
  // eslint-disable-next-line
  let [humidity, setHumidity] = useState("");
  // eslint-disable-next-line
  let [wind, setWind] = useState("");
  // eslint-disable-next-line
  let [icon, setIcon] = useState("");
  function showWeather(response) {
    setTemp(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  return (
    <section class="searchBar">
      <form className="row g-0" id="search-form" onSubmit={handleSubmit}>
        <div className="col-3 offset-4">
          <label for="inputPassword2" className="visually-hidden">
            Password
          </label>
          <input
            type="text"
            class="form-control"
            id="search-text-input"
            placeholder="Search for your City"
            onChange={changeCity}
          />
        </div>
        <div className="col-1">
          <button type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </div>
      </form>
    </section>
  );
}
