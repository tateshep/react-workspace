import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name:'Tate',age:28},
      {name:'Gandalf',age:2019},
      {name:'Frodo',age:33},
    ],
    otherState: 'som other values',
  }

  switchNameHandler = () => {
    // console.log('button works');
    // Dont do: this.state.persons[0] = 'Tater'
    this.setState({
        persons: [
          {name:'Tater',age:28},
          {name:'Gandalf',age:2019},
          {name:'Frodo',age:34},
        ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>

        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>The Ring is my burden</Person>


      </div>
    );

      // return React.createElement('div', null, 'h1', "Hi i\'m a Reactapp");
    
  }
}

export default App;
