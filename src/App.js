import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: "",
    textLength: 0
  }

  outputTextLength = e => {
    const text = e.target.value;
    const textLength = e.target.value.length;

    this.setState({
      text: text,
      textLength: textLength
    });
  }

  deleteCharacter = (index) => {
    const textArray = [...this.state.text.split('')];
    textArray.splice(index, 1);
    const newTextString = textArray.join('');
    console.log(newTextString);

    this.setState({
      text: newTextString,
      textLength: textArray.length
    });
  }

  render() {
    let textLengthOutput = null
    if(this.state.textLength > 0) {
      textLengthOutput = <p>Text length: {this.state.textLength}</p>
    } else {
      textLengthOutput = <p>Text length: 0</p>
    }

    let charactersList = null;
    if(this.state.text.length > 0) {
      charactersList = (
        <div>
          {this.state.text.split('').map((char, index) => {
            return <CharComponent
              char={char}
              click={() => this.deleteCharacter(index)} 
              key={Math.random()}/>
          })}
        </div>
      )
    } else {
      charactersList = null;
    }

    return (
      <div className="App">
        <input type="text" onChange={this.outputTextLength} value={this.state.text}/>
        {textLengthOutput}
        <ValidationComponent textLength={this.state.textLength}/>
        {charactersList}        
      </div>
    );
  }
}

export default App;