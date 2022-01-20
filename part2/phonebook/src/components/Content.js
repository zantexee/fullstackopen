import React from 'react';
import Person from './Person';
const Content = ({ persons, filter, personsHandler }) => {
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filter))
        .map((filteredPerson) => {
          return (
            <Person
              key={filteredPerson.name.toLowerCase()}
              person={filteredPerson}
              personsArr={persons}
              personsHandler={personsHandler}
            />
          );
        })}
    </div>
  );
};

export default Content;
