import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from "../utils/config";

const Header = ({ onSearchCityChange }) => {

  const [search, setSearch] = useState("");

  const searchCityHandler = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  const submitCityHandler = (event) => {
    event.preventDefault();

    const getWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=${API_KEY}`
        );
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getWeatherData();
    setSearch("");
  };

  return (
    <form className="form" onSubmit={submitCityHandler}>
      <input
        type="text"
        placeholder="Search for city"
        value={search}
        onChange={searchCityHandler}
      />
      <button className="search_btn">Go</button>
    </form>
  );
};

export default Header;
