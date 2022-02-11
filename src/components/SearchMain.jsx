import React, { useState, useEffect } from "react";
import "../styles/style.css";
import WeatherDetails from "./WeatherDetails";

const SearchMain = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tempInfo, setTempInfo] = useState({});
  const APIKey = "a18baae4fc5e09b34b984b0e61883b0f";

  const getWeatherInfo = async () => {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${APIKey}`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search city..."
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="searchButton" onClick={getWeatherInfo}>
          Search
        </button>
      </div>
      {/* Weather details here */}
      <WeatherDetails {...tempInfo} />
    </>
  );
};

export default SearchMain;
