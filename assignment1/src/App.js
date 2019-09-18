import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  
  state = {
    userNames: [
      {userName: 'fred'},
      {userName: 'jorge'},
      {userName: 'george'},
      
    ]
  }

  userNameHandler = (event) => {
    this.setState({
      userNames: [
        {userName: event.target.value},
        {userName: 'jorge'},
        {userName: 'george'},

      ]
    })
  }

  render() {
    
    return (
      <div className="App">
        <UserInput changed = {this.userNameHandler} name="User Input"></UserInput>

        <UserOutput userName={this.state.userNames[0].userName}></UserOutput>
        <UserOutput userName={this.state.userNames[1].userName}></UserOutput>
        <UserOutput userName={this.state.userNames[2].userName}></UserOutput>

      </div>
    );
  }
}

export default App;
