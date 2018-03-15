import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    textLength: 0
  }

  outputTextLength = e => {
    const textLength = e.target.value.length;
    this.setState({ textLength: textLength })
  }

  render() {
    let textLengthOutput = null
    if(this.state.textLength > 0) {
      textLengthOutput = <p>Text length: {this.state.textLength}</p>
    } else {
      textLengthOutput = <p>Text length: 0</p>
    }

    return (
      <div className="App">
        <input type="text" onChange={this.outputTextLength}/>
        {textLengthOutput}
      </div>
    );
  }
}

export default App;
