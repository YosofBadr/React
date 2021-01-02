import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (properties) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  return (
    <div className="Person" style={style}> 
      <p onClick={properties.clickAction}> Person with name {properties.name} and age {properties.age} </p>
      <p> {properties.children} </p>
      <input type="text" onChange={properties.changed} value={properties.name} />
    </div>
  )
};

export default Radium(person); 