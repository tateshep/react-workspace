import React from 'react';
// import './Person.css';

const userInput = (props) =>{
    return (
        <div className="userInput">
            <p>I started as { props.userName }</p>
            <input onChange={props.changed} type="text" />
        </div>
    )
}

export default userInput;