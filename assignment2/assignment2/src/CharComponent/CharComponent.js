import React from 'react';

const charComponent = (props) => {
    // need to figure out how to spit out a list into main app
    // and have letters delete when clicked

    const style = {
        display: 'inline',
        padding: '16px',
        margin: '16px',
        border: 'solid 1px white',
        textAlign: 'center',
        
    };

    return (
        <div style={style} onClick={ props.clicked } className="">
            {props.letter}
        </div>
    )
}

export default charComponent;