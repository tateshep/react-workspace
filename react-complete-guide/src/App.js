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
    showPersons: false,

  }

  switchNameHandler = (newName) => {
    // console.log('button works');
    // Dont do: this.state.persons[0] = 'Tater'
    this.setState({
        persons: [
          {name:newName,age:28},
          {name:'Gandalf',age:2019},
          {name:'Frodo',age:34},
        ],
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
        persons: [
          {name: event.target.value ,age:28},
          {name:'Gandalf',age:2019},
          {name:'Frodo',age:34},
        ]
    } )
  }

  deletePersonHandler = (personIndex) => {

    // always update state in an immutable fashion. 
    // Create a copy, update the copy, leave the original the same
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    // with the error function,s the 'this' keyword always refers to the class
    const doesShow= this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  render() {

    // inline styling
    const style = {
     
      border: 'solid cyan 3px',
      backgroundColor: 'black',
      padding: '10px',
      fontSize: '24px',
      color: 'white',
      boxShadow: '4px 4px 0 0 black',
      
    };

    let persons = null;

    if (this.state.showPersons) {
      // Can also use a ternery operator within the return, with simple statements to achieve the same thing
      // however this if statement is the preferred way
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                click={() => this.deletePersonHandler(index)} 
                name={person.name} 
                age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>React App</h1>
      {/*  Use the bind syntax instead typically */}
        <button style={style} onClick={() => this.switchNameHandler('TATER')}>Switch Name</button>
        <button syle={style} onClick={this.togglePersonHandler}>Toggle Persons</button>       
        
        { persons }

      </div>
    );

      // return React.createElement('div', null, 'h1', "Hi i\'m a Reactapp");
    
  }
}

export default App;
