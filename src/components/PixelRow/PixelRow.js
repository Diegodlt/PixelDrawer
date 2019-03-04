import React, { Component } from 'react';

import Pixel from '../../containers/Pixel/Pixel';

const pixelRow = props => {

    let row = [];

    for(let i = 0; i < props.columns; i++){
        row.push(<Pixel key={i} newColor={props.newColor}/>);
    }

    return(
        <div>{row}</div>
    );
    
}

export default pixelRow;