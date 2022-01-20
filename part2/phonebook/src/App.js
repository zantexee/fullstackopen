import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Content from './components/Content';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = { name: newName, number: newNumber };

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase(),
    );

    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook. Replace with the new entry?`,
        )
      ) {
        const newPersonIndex = persons.findIndex(
          (currPerson) => currPerson.id === existingPerson.id,
        );
        const newPersonArr = persons.slice();
        newPersonArr[newPersonIndex].number = personObject.number;
        setPersons(newPersonArr);
        return personService.update(existingPerson.id, personObject);
      }
      return;
    }

    personService
      .create(personObject)
      .then((response) => console.log(response.data));

    setPersons(persons.concat(personObject));
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Content persons={persons} filter={filter} personsHandler={setPersons} />
    </div>
  );
};

export default App;
