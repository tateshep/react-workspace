import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {


  state = {
    inputLength: 0,
  }

  

  lengthHandler = (event) => {
    
    let value = event.target.value.split('').length;
    
    this.setState({
      inputLength: value,
    })
  }

  render () {

    const style = {
      border: 'solid cyan 3px',
    }

    const inlineStyle = {
      display: 'block',
    }

    return (
      <div className="App">
        <h1 style={style} >This working</h1>

        <UserInput
          inputLength={this.state.inputLength}
          changed={ (event)  => this.lengthHandler(event)}></UserInput>

          <ValidationComponent inputLength= {this.state.inputLength}></ValidationComponent>

          <CharComponent style={inlineStyle}></CharComponent>
          <CharComponent style={inlineStyle}></CharComponent>
          <CharComponent style={inlineStyle}></CharComponent>

      </div>
    );
  };
}

export default App;
