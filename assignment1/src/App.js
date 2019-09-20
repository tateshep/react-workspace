import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  
  state = {
    userNames: [
      {userName: 'fred', originalValue: 'fred'},
      {userName: 'jorge'},
      {userName: 'george'},
    ]
  }

  userNameHandler = (event) => {
    this.setState({
      userNames: [
        {userName: event.target.value, originalValue: 'fred'},
        {userName: 'jorge'},
        {userName: 'george'},
      ]
    })
  }

  render() {
    
    // styling 
    const style = {
      backgroundColor : '#333',
      color: 'white',
    };

    return (
      <div style={style} className="App">
        <UserInput changed = {this.userNameHandler} originalValue={this.state.userNames[0].userName} ></UserInput>

        <UserOutput userName={this.state.userNames[0].userName} original={this.state.userNames[0].originalValue}></UserOutput>
        <UserOutput userName={this.state.userNames[1].userName}></UserOutput>
        <UserOutput userName={this.state.userNames[2].userName}></UserOutput>

      </div>
    );
  }
}

export default App;
