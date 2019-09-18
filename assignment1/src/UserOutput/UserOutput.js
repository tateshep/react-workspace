import React from 'react';
// import './Person.css';

const userOutput = (props) =>{
    return (
        <div className="userOutput">
            <hr />
            <p>{ props.userName }</p>
            <p>{ props.changed }</p>
        </div>
    )
}

export default userOutput;