import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


class App extends Component {
  state = {
    userNames: [
      { userName: "Billy323"},
      { userName: "KoolKat98"},
    ]
  };

  manipulateStateHandler = (event) => {
    this.setState({
      userNames: [
        { userName: event.target.value},
        { userName: "KoolKat98"},
      ]
    })
  };

  render() {

    const style = {
      backgroundColor: "red",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <UserInput  style={style} userName={this.state.userNames[0].userName} changed={this.manipulateStateHandler}> </UserInput>
        <UserOutput style={style} userName={this.state.userNames[0].userName}> </UserOutput>
        <UserOutput userName={this.state.userNames[1].userName}> </UserOutput>
      </div>
    );
  }
}

export default App;
