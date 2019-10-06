import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 'asd',name:'Tate',age:28},
      {id: 'fgh',name:'Gandalf',age:2019},
      {id: 'jkl',name:'Frodo',age:33},
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      // same as
      // const person = Object.assign({}, this.state.persons[personIndex])
        ...this.state.persons[personIndex],
    };
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
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
                click={() => this.deletePersonHandler(person.id)} 
                name={person.name} 
                age={person.age}
                // added unique ids to the states to fix console error about 'keys'
                key={person.id}
                changed={ (event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );


      style.backgroundColor = 'red'  

    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes will be 'red'

    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (

        <div className="App">
          
          <p className={classes.join(' ')}>Hello this is a paragraph</p>
  
        {/*  Use the bind syntax instead typically */}
          <button key="button1" style={style} onClick={() => this.switchNameHandler('TATER')}>Switch Name</button>
          <button key="button2" style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>       
          
          { persons }
  
        </div>
      );
  
        // return React.createElement('div', null, 'h1', "Hi i\'m a Reactapp");
      
  }
}

export default App;
