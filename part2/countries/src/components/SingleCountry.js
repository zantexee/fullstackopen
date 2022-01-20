import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

const SingleCountry = ({ country }) => {
  const [weatherData, setWeatherData] = useState('');

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=${api_key}&units=metric`,
      )
      .then((response) => {
        setWeatherData(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        capital {country.capital} <br />
        population {country.population}
      </p>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((currLanguage) => (
          <li key={`${country.name.common}`}>{currLanguage}</li>
        ))}
      </ul>
      <img
        src={`${country.flags.svg}`}
        alt="country flag"
        width="150px"
        height="150px"
      />
      <h1>Weather in {country.name.common}</h1>
      <p>
        <b>temperature: </b> {weatherData.main.temp} Celcius
      </p>
      <p>
        {' '}
        <img
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt="Weather Icon"
        />
      </p>
      <p>
        <b>wind:</b> {weatherData.wind.speeed} km/h direction{' '}
        {weatherData.wind.deg}
      </p>
    </div>
  );
};

export default SingleCountry;
