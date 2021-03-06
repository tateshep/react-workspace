import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';
import Button from '@material-ui/core/Button';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    // useEffect is like a lifecycle hook, but for functions

    useEffect(() => {
        console.log('Cockpit.js use effect');
        // HTTP request or something like that... 
        // Executes for every render cycle

        toggleBtnRef.current.click();

        setTimeout(() => {
            console.log('Saved data to cloud!');
        }, 500);
        return () => {
            alert('cockpit.js cleanup in useEffect')
        }
    }, []); // add an array to say when the UseEffect will exectue, if this array is empty, similar to componentDidMopunt

    useEffect(() => {
        console.log('second useEffect');
        return () => {
            console.log('cockpit.js cleanupwork in 2nd UseEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = '';
    
    if (props.showPersons) {
        btnClass = classes.Red
    }
    // style.backgroundColor = 'red'  

    
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // assignedClasses will be 'red'
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <AuthContext.Consumer>
            {(context) => 
                 <Button onClick={context.login} variant="contained" color="primary">Log in</Button>
            }
            </AuthContext.Consumer>
            <h4>{props.title}</h4>
            <p className={assignedClasses.join(' ')}>Hello this is a paragraph</p>
  
        {/*  Use the bind syntax instead typically */}
            {/* <button className={btnClass} key="button1" onClick={() => props.switchName('TATER')}>Switch Name</button> */}
            <button ref={toggleBtnRef} key="button2" className={btnClass} onClick={props.clicked}>Toggle Persons</button> 
        </div>
    );
};

// React.memo is a good optimization tool
export default React.memo(cockpit);