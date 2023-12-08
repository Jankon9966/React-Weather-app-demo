import React from "react";

const Content = () => {
  return <div className="container">
    <div className="weather_img">
        <img src="/" alt="weather" />
    </div>
    <div className="weather_options">
        <div className="temp">
            <h2>1c</h2>
        </div>
        <h3 className="city_name">Berlin</h3>
        <div className="weather_sub">
            <div className="humidity">
                <h3>90 %</h3>
                <p>Humidity</p>
            </div>
            <div className="wind">
                <h3>2.68 km/h</h3>
                <p>Wind speed</p>
            </div>
        </div>
    </div>
  </div>;
};

export default Content;
