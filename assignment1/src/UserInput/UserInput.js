import React from 'react';
// import './Person.css';

const userInput = (props) =>{
    return (
        <div className="userInput">
            <p>User Input</p>
            <input onChange={props.changed} type="text" value={props.originalValue} />
        </div>
    )
}

export default userInput;