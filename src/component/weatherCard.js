import React from "react";

const WeatherCard = ({ tempInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={"wi wi-day-sunny"}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherMood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                {sunset}
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-day-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                sunset
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                haze
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-day-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                humidity
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
