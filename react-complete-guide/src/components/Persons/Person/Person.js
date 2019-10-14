// Person.js
import React, { Component } from 'react';
import './Person.module.css'; 
import classes from './Person.module.css';
import Aux from '../../../hoc/aux';
import withClass from '../../../hoc/WithClass';

class Person extends Component {
   
    // const rnd = Math.random();

    // if (rnd>0.7) {
    //     throw new Error('Something went wrong');
    // }

    render () {
        console.log('Person.js rendering');
        // Aux is created in the hoc folder
        // alternatively, could import Fragment from react, and use 
        // <Fragment></Fragment> or <React.Fragment></React.Fragment>
        
        return (
            <Aux>
                
                <p key='1' onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old</p>,
                <input key='2'
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </Aux>
        );
    }
}

export default Person;