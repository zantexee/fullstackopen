import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SingleCountry from './SingleCountry';

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

  const handleShow = (event) => {
    setFilter(event.target.attributes[0].value);
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
              if (filteredCountries.length > 1)
                return (
                  <p key={currCountry.name.common}>
                    {currCountry.name.common}{' '}
                    <button
                      data-country={currCountry.name.common}
                      onClick={handleShow}
                    >
                      show
                    </button>
                  </p>
                );
              else return null;
            })}
        {filteredCountries.length === 1 && (
          <SingleCountry country={filteredCountries[0]} />
        )}
      </div>
    </div>
  );
};

export default App;
