import React from 'react';

import classes from './Person.css';

const person = (properties) => {
  return (
    <div className={classes.Person}>  
      <p onClick={properties.clickAction}> Person with name {properties.name} and age {properties.age} </p>
      <p> {properties.children} </p>
      <input type="text" onChange={properties.changed} value={properties.name} />
    </div>
  )
};

export default person; 