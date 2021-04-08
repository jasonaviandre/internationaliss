import React from 'react';

const Location = ({position}) => {
    console.log(position);
    return (
        <div className="tc">
            <p>latitude:</p>
            <p>longitude:</p>
        </div>
    )
}

export default Location