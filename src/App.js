import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: ""
  }

  outputTextLength = e => {
    const text = e.target.value;
    const textLength = e.target.value.length;

    this.setState({
      text: text
    });
  }

  deleteCharacter = (index) => {
    const textArray = [...this.state.text.split('')];
    textArray.splice(index, 1);
    const newTextString = textArray.join('');
    console.log(newTextString);

    this.setState({
      text: newTextString
    });
  }

  render() {
    let charactersList = null;
    if(this.state.text.length >= 6) {
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
        <div>Text length: {this.state.text.length}</div>
        <ValidationComponent textLength={this.state.text.length}/>
        {charactersList}        
      </div>
    );
  }
}

export default App;