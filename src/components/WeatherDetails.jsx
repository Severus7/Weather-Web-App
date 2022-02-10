import React from "react";

const WeatherDetails = () => {
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-sunny"></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>23.99&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place">Manila, PH</div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherDetails;
