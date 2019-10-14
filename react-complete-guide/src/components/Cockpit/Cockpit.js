import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
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
            <h4>{props.title}</h4>
            <p className={assignedClasses.join(' ')}>Hello this is a paragraph</p>
  
        {/*  Use the bind syntax instead typically */}
            {/* <button className={btnClass} key="button1" onClick={() => props.switchName('TATER')}>Switch Name</button> */}
            <button key="button2" className={btnClass} onClick={props.clicked}>Toggle Persons</button>     
        </div>
    );
};

export default cockpit;