import React from 'react';
// import './Person.css';

const userInput = (props) =>{
    return (
        <div className="userInput">
            <p>I am the user Input</p>
            <input onChange={props.changed} type="text" />
        </div>
    )
}

export default userInput;