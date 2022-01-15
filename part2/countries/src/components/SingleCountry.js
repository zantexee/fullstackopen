import React from 'react';

const SingleCountry = ({ country }) => {
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
    </div>
  );
};

export default SingleCountry;
