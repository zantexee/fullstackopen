import React from 'react';
import Person from './Person';
const Content = ({ persons, filter }) => {
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filter))
        .map((filteredPerson) => (
          <Person person={filteredPerson} />
        ))}
    </div>
  );
};

export default Content;
