import React, { useState } from "react";
import "../styles/style.css";
import WeatherDetails from "./WeatherDetails";

const SearchMain = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

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
        <button className="searchButton">Search</button>
      </div>
      <WeatherDetails />
    </>
  );
};

export default SearchMain;
