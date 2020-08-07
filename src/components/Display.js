import React from 'react';

const style = {
    fontSize: 110,
    color: 'lightgrey',
    position: 'absolute',
    top: '30%',
    width: '100%', 
    
};

export const Display = (props) => {
    return (
        <div style={style}>{props.number}</div>
    )
} 

