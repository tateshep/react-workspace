import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
        // <ErrorBoundary ></ErrorBoundary>

        shouldComponentUpdate(nextProps, nextState) {
            console.log('persons.js shouldcomponentupdate');
            if (nextProps.persons !== this.props.persons) {
                // if the persons prop doesnt change, then a lot of other stuff does not need to be updated
                // good performance enhancer
                return true;
            } else {
                return false;
            }
        }

        getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log('Persons.js getsnapshotbeforeupdate');
            return true;
        }
        

        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('Persons componentdidupdate, there are a bunch of other lifecycle hooks like this one, but this will be most common, useful for reaching out to APIs and stuff');
            console.log(snapshot);''
        }

        render () {
           return this.props.persons.map((person,index) => {
                return (
                    <Person
                    key={index} 
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
