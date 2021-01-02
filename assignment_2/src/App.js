import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inputText: '',
    inputLength: 0,
  };

  inputChangeHandler = (event) => {
    let inputTextLength = event.target.value.length;
    this.setState({
      inputText: event.target.value,
      inputLength: inputTextLength
    })
  };

  deleteCharHandler = (charIdx) => {
    let inputText = [...this.state.inputText];
    inputText.splice(charIdx, 1);
    inputText = inputText.join('');
    this.setState({
      inputText: inputText,
      inputLength: inputText.length
    });
  };

  render() {
        let stringArray = this.state.inputText.split('');
        let chars = (
          <div>
            {stringArray.map((currChar, index) => {
              return <CharComponent click={() => this.deleteCharHandler(index)} char={currChar} />
            })}
          </div>
        )

    return (
      <div className="App">
        <input value={this.state.inputText} onChange={(event) => this.inputChangeHandler(event)} type='text'/>

        <p> Input length: {this.state.inputLength} </p>

        <ValidationComponent textLength={this.state.inputLength}/>

        {chars}
      </div>
    );
  }
}

export default App;
