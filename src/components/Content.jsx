import React from "react";


const Content = ({ data, weatherImage }) => {
  return (
    <div className="container">
      <div className="weather_img">
        <img src={weatherImage} alt="weather" />
      </div>
      <div className="weather_options">
        <div className="temp">
          <h2>{Number(data.temp).toFixed()}°C</h2>
        </div>
        <h3 className="city_name">{data.city}</h3>
        <div className="weather_sub">
          <div className="humidity">
            <h3>{data.humidity} %</h3>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <h3>{data.wind} km/h</h3>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
