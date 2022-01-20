import React from 'react';
import personServices from '../services/persons';

const Person = ({ person, personsArr, personsHandler }) => {
  const deleteHandler = () => {
    if (!window.confirm(`Delete ${person.name}?`)) return;
    personServices.remove(person.id);
    const newArray = personsArr.filter(
      (currPerson) => !(person.id === currPerson.id),
    );
    personsHandler(newArray);
  };
  return (
    <p>
      {person.name} {person.number}{' '}
      <button onClick={() => deleteHandler()}>delete</button>
    </p>
  );
};

export default Person;
