import React from 'react';

const validationComponent = (props) => {

    let checkLength = props.inputLength >= 5 ? "Text Long Enough" : "Text Too Short";

    return (
        <div className="">
            <p>{checkLength}</p>
        </div>
    )
}

export default validationComponent;