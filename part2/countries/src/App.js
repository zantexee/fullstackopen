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
    console.log(currCountry);
    return currCountry.name.common.toLowerCase().includes(filter.toLowerCase());
  });
  const handleFilterChange = (event) => {
    console.log(filter);
    setFilter(event.target.value);
  };

  return (
    <div>
      <div>
        find countries <input value={filter} onChange={handleFilterChange} />
      </div>
      <div>
        {filteredCountries.length > 10
          ? 'Too many matches, specify another filter'
          : filteredCountries.map((currCountry) => <p>{currCountry.name.common}</p>)}
      </div>
    </div>
  );
};

export default App;
