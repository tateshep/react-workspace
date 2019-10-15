// Person.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Person.module.css'; 
import classes from './Person.module.css';
import Aux from '../../../hoc/aux';
import withClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    // const rnd = Math.random();

    // if (rnd>0.7) {
    //     throw new Error('Something went wrong');
    // }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render () {
        console.log('Person.js rendering');
        // Aux is created in the hoc folder
        // alternatively, could import Fragment from react, and use 
        // <Fragment></Fragment> or <React.Fragment></React.Fragment>
        
        return (
            <Aux>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>User Authenticated</p> : <p>Please Login</p>}
                </AuthContext.Consumer>
                <p key='1' onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old</p>,
                <input key='2'
                    type="text"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </Aux>
        );
    }
}

Person.propTypes = {
    // debugging tool for development. Checks that props
    // gives the expected items. Helpful if distributing to
    // other developers, or if using in a larger team


    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default Person;