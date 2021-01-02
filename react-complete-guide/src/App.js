import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'uniqueID1', name: "Bob", age: 12 },
      { id:'uniqueID2', name: "Billy", age: 32 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {

    const style = {
      backgroundColor: "green",
      color: 'white',
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'yellow',
        color: 'white'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              clickAction={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
      </div>  
      );
      
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'pink',
        color: 'black'
      }

    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
       classes.push('bold')
    }

    return (
      <StyleRoot>
        <div className="App">

          <h1> React App </h1>

          <p className={classes.join()}> Dynamic classes </p>
          <button style={style} onClick={this.togglePersonHandler}> Destroy </button>

          {persons}

        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
