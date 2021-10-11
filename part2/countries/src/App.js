import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filteredCountries = countries.filter((currCountry) => {
    return currCountry.name.common.toLowerCase().includes(filter.toLowerCase());
  });

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <div>
        find countries <input value={filter} onChange={handleFilterChange} />
      </div>
      <div>
        {filteredCountries.length > 10 && filteredCountries.length !== 1
          ? 'Too many matches, specify another filter'
          : filteredCountries.map((currCountry) => {
              if (filteredCountries.length > 1) return <p>{currCountry.name.common}</p>;
              else return null;
            })}
        {filteredCountries.length === 1 && (
          <div>
            <h1>{filteredCountries[0].name.common}</h1>
            <p>
              capital {filteredCountries[0].capital} <br />
              population {filteredCountries[0].population}
            </p>
            <h2>languages</h2>
            <ul>
              {Object.values(filteredCountries[0].languages).map((currLanguage) => (
                <li key={`${filteredCountries[0].name.common}`}>{currLanguage}</li>
              ))}
            </ul>
            <img
              src={`${filteredCountries[0].flags.svg}`}
              alt="country flag"
              width="150px"
              height="150px"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
