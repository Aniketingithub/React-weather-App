import React, { useState, useEffect } from "react";
import WeatherCard from "./weatherCard";
import "./style.css";

const Weather = () => {
  const [search, setSearch] = useState("bhopal");
  const [tempInfo, setTempInfo] = useState({});

  const getInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c4bd76030613e12cc94b866a8cf337b8`;

      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search City"
            autoFocus
            id="search"
            className="searchTerm"
            value={search}
            onChange={(eve) => setSearch(eve.target.value)}
          />
          <button className="searchButton" type="button" onClick={getInfo}>
            Search
          </button>
        </div>
      </div>
      <WeatherCard tempInfo={tempInfo} />
    </>
  );
};

export default Weather;
