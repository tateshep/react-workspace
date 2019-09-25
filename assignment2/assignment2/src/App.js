import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
  // my validation method does not check updated text after deleting, whereas the solution does


  state = {
    inputLength: 0,
    chars: 'fasdf',
  }

  

  lengthHandler = (event) => {
    
    let value = event.target.value;
    
    this.setState({
      inputLength: value.split('').length,
      chars: value,
    })
    // console.log(this.state.chars);
  }

  deleteCharHandler = (charIndex) => {
    const text = this.state.chars.split('');
    text.splice(charIndex, 1);
    const updatedText = text.join('');
    this.setState({
      chars: updatedText
    })
  }

  render () {

    const style = {
      border: 'solid cyan 3px',
    }    

    const charList = this.state.chars.split('').map( (char , index) => {
            
            // console.log(this.state.chars[index]);

            return <CharComponent
              letter = {char}
              key = {index}
              clicked = { () => this.deleteCharHandler(index) }
            />
          });


    return (
      <div className="App">
        <h1 style={style} >This working</h1>

        <UserInput
          inputLength={this.state.inputLength}
          changed={ (event)  => this.lengthHandler(event)}
          chars={this.state.chars}></UserInput>

          <ValidationComponent inputLength= {this.state.inputLength}></ValidationComponent>

          { charList }

      </div>
    );
  };
}

export default App;
