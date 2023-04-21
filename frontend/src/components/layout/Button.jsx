import React from 'react';
import './style.css';

function Button({name, onClick}) {
    return(
        <button onClick={onClick}>{name}</button>
    )
}

export default Button