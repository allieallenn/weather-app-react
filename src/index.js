import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import Current from "./Current";
import ForecastDay from "./Forecast-day";
import Forecast from "./Forecast";
import Search from "./Search";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Search />
    <Current />
    <ForecastDay />
    <Forecast />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
