import React from 'react';
// import './Person.css';

const userOutput = (props) =>{
    return (
        <div className="userOutput">
            <hr />
            <p>{ props.original }</p>
            <p>{ props.userName }</p>
        </div>
    )
}

export default userOutput;