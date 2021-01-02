import React from 'react';

const validationComponent = (props) => {
  let output = null;

  if (props.textLength >= 5) {
    output = (
      <p> Text long enough </p>
    )
  }
  else {
    output = (
      <p> Text too short </p>
    )
  }
  
  return (
    <p> 
      {output}
    </p>
  )
};

export default validationComponent;