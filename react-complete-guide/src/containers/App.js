import React, { Component } from 'react';
import './App.module.css';
import Button from '@material-ui/core/Button';

// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App.js Constructor')
    // can do this for older style of initializing state
    // this.state = (... some stuff)
  }

  state = {
    persons: [
      {id: 'asd',name:'Tate',age:28},
      {id: 'fgh',name:'Gandalf',age:2019},
      {id: 'jkl',name:'Frodo',age:33},
    ],
    otherState: 'som other values',
    showPersons: false,

  }

  static getDerivedStateFromProps(props,state) {
    console.log('App.js getDerivedstatfromadlkasdfaf', props);
    return state;
  }

  //component lifecycle hooks
  componentDidMount() {
    console.log('App.js component did mount');
  }

  shouldComponentUpdate() {
    // must return true or false
    // true lets the app keep running, false stops it
    console.log('App.js shouldcomponentpUp');
    return true;
  }

  componentDidUpdate() {
    console.log('app.js this.componentDidUpdate');
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
    console.log('app js render');
    // inline styling
    // const style = {
     
    //   border: 'solid cyan 3px',
    //   backgroundColor: 'black',
    //   padding: '10px',
    //   fontSize: '24px',
    //   color: 'white',
    //   boxShadow: '4px 4px 0 0 black',
      
    // };

    let persons = null;
    // let classes = [];

    if (this.state.showPersons) {
      // Can also use a ternery operator within the return, with simple statements to achieve the same thing
      // however this if statement is the preferred way
      persons = <Persons
            persons= {this.state.persons}
            clicked= {this.deletePersonHandler}
            changed= {this.nameChangedHandler}></Persons>;
    }


    return (

        <div className="App">
          
          <Cockpit
            title = {this.props.appTitle}
            showPersons= {this.state.showPersons}
            persons= {this.state.persons}
            clicked= {this.togglePersonHandler}/>

          { persons }
          <Button variant="contained" color="primary">Material UI Button</Button>
  
        </div>
      );
  
        // return React.createElement('div', null, 'h1', "Hi i\'m a Reactapp");
      
  }
}

export default App;
