// UserInput.js

import React from 'react';
// import './UserInput.css';


const userInput = (props) => {
    return (
        <div className="UserInput">
            <p>User Input</p>
        <input onChange={props.changed} type="text" />
            <p>Change Listener: {props.inputLength}</p>
        </div>
    )
}

export default userInput;