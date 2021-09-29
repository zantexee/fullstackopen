import React from 'react';

const Part = (props) => {
  return (
    <p key={props.name}>
      {props.name} {props.exercises}
    </p>
  );
};

const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const Content = ({ parts }) => {
  const totalExercises = parts.reduce((a, b) => b.exercises + a, 0);
  return (
    <div>
      {parts.map((currPart) => (
        <Part name={currPart.name} exercises={currPart.exercises} key={currPart.name} />
      ))}
      <p>
        <b>total of {totalExercises} exercises</b>
      </p>
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((currCourse) => {
        return (
          <div>
            <Header courseName={currCourse.name} />
            <Content parts={currCourse.parts} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
