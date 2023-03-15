import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import Search from "./Search";
import Current from "./Current";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";

export default function App() {
  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const apiKey = "017d56650cd168d68067850318775d43";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  let [city, setCity] = useState();
  let [date, setDate] = useState();
  let [temp, setTemp] = useState("");
  let [maxTemp, setMaxTemp] = useState();
  let [minTemp, setMinTemp] = useState();
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [isShowingWeather, setIsShowingWeather] = useState(false);

  function showWeather(response) {
    setTemp(Math.round(response.data.main.temp));
    setMaxTemp(Math.round(response.data.main.temp_max));
    setMinTemp(Math.round(response.data.main.temp_min));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(response.data.weather[0].icon);
    setIsShowingWeather(true);
    setDate(new Date(response.data.dt * 1000));
  }
  function getConditionIcons(weather) {
    const obj = {
      rain: "fa-solid fa-cloud-showers-heavy",
      sun: "fa-solid fa-sun",
      clouds: "fa-solid fa-cloud-sun",
      thunderstorm: "fa-solid fa-cloud-bolt",
      drizzle: "fa-solid fa-cloud-rain",
      snow: "fa-solid fa-snowflake",
      clear: "fa-solid fa-sun",
      mist: "fa-solid fa-cloud-showers-heavy",
      smoke: "fa-solid fa-smog",
      smog: "fa-solid fa-smog",
      fog: "fa-solid fa-smog",
      haze: "fa-solid fa-smog",
      dust: "fa-solid fa-smog",
      sand: "fa-solid fa-smog",
      ash: "fa-solid fa-volcano",
      tornado: "fa-solid fa-tornado",
    };
  }

  return (
    <>
      <Search handleSubmit={handleSubmit} setCity={setCity} />
      {isShowingWeather ? (
        <>
          <FormattedDate className="currentDate" date={date} />
          <Current
            date={date}
            city={city}
            temp={temp}
            maxTemp={maxTemp}
            minTemp={minTemp}
            description={description}
            humidity={humidity}
            wind={wind}
            icon={icon}
          />
        </>
      ) : null}
      {/* <Forecast /> */}
    </>
  );
}
