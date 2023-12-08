import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { mistIcon, clearIcon, cloudsIcon, snowIcon, rainIcon, drizzleIcon } from "./utils/index";
import axios from "axios";
import { API_URL } from "./utils/config";

const App = () => {

  const [weatherData, setWeatherData] = useState({});
  const [weatherIcon, setWeatherIcon] = useState([
    clearIcon,
    cloudsIcon,
    mistIcon,
    snowIcon,
  ]);

  const getWeather = async (city) => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      console.log(data);
      setWeatherData({
        city: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed
      });
      
      if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
        setWeatherIcon(clearIcon);
      } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
        setWeatherIcon(cloudsIcon);
      } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
        setWeatherIcon(snowIcon);
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  },[])

  return (
    <div className="app">
      <div className="main">
        <Header />
        <Content data={weatherData} weatherImage={weatherIcon} />
      </div>
    </div>
  );
};

export default App;
