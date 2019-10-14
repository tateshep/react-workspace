import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
        // <ErrorBoundary ></ErrorBoundary>

        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('Persons componentdidupdate, there are a bunch of other lifecycle hooks like this one, but this will be most common, useful for reaching out to APIs and stuff');
            console.log(snapshot);''
        }

        render () {
           return this.props.persons.map((person,index) => {
                return (
                    <Person
                    key={person.id} 
                    click={() => this.props.clicked(index)} 
                    name={person.name} 
                    age={person.age}
                    // added unique ids to the states to fix console error about 'keys'
                    changed={ (event) => this.props.changed(event, person.id)} />
                );
            });
        }
    }
     



export default Persons;
